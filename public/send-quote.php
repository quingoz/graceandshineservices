<?php
/**
 * Handles submissions from the "Get a Free Quote" form on the website and
 * emails the details to the business inbox.
 *
 * This file is deployed as a static asset alongside the exported Next.js
 * site (see next.config.js -> output: 'export') and relies on the cPanel
 * hosting environment's built-in PHP + mail() support. No third-party
 * service or API key is required.
 */

header('Content-Type: application/json; charset=utf-8');

// Only accept POST requests.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// The address that should receive every quote request.
$recipient = 'graceandshineservice@gmail.com';

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

// Simple honeypot: real visitors never fill this hidden field, bots often do.
if (!empty($input['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

function clean_text($value)
{
    $value = is_string($value) ? $value : '';
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value); // prevent header injection
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$name = clean_text($input['name'] ?? '');
$phone = clean_text($input['phone'] ?? '');
$email = trim((string) ($input['email'] ?? ''));
$service = clean_text($input['service'] ?? '');
$zip = clean_text($input['zip'] ?? '');
$squareFootage = clean_text($input['squareFootage'] ?? '');
$language = clean_text($input['language'] ?? 'en');

$missing = [];
if ($name === '') $missing[] = 'name';
if ($phone === '') $missing[] = 'phone';
if ($email === '') $missing[] = 'email';
if ($service === '') $missing[] = 'service';
if ($zip === '') $missing[] = 'zip';
if ($squareFootage === '') $missing[] = 'squareFootage';

if (!empty($missing)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Missing required fields', 'fields' => $missing]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$emailSafe = clean_text($email);
$host = $_SERVER['SERVER_NAME'] ?? 'graceandshineservices.com';

$subject = 'New Free Quote Request - Grace and Shine Cleaning';

$bodyLines = [
    'A new quote request was submitted from the website:',
    '',
    "Name: $name",
    "Phone: $phone",
    "Email: $emailSafe",
    "Service Type: $service",
    "Zip Code: $zip",
    "Approximate Square Footage: $squareFootage sq ft",
    "Language: $language",
    '',
    'Submitted: ' . date('F j, Y g:i A'),
];
$body = implode("\r\n", $bodyLines);

$headers = [
    "From: Grace and Shine Website <no-reply@$host>",
    "Reply-To: $name <$emailSafe>",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to send message. Please call or email us directly.']);
}
