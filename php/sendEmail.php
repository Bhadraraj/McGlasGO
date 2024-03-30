<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/phpmailer/phpmailer/src/Exception.php';
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $city = $_POST["city"];
    $reason = $_POST["reason"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $feedback = $_POST["feedback"];

    $mail = new PHPMailer(true);

    try {

        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.mcglasgo.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@mcglasgo.com';
        $mail->Password = '12345@12345';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('info@mcglasgo.com', $name);
        $mail->addAddress('info@mcglasgo.com', 'Manager');

        $mail->isHTML(true);


        $subject = 'Enquiry Regarding';
        $mail->Subject = $subject;

        // Email body
        // $body = '<p>Reg - Enquiry,</p>';
        $body .= '<table border="1" cellspacing="0" style="border-collapse: collapse; width: 100%;">';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">' . $name . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">City</td><td style="padding: 8px; border: 1px solid #ddd;">' . $city . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Mobile</td><td style="padding: 8px; border: 1px solid #ddd;">' . $mobile . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">' . $email . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Reason</td><td style="padding: 8px; border: 1px solid #ddd;">' . $reason . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Feedback</td><td style="padding: 8px; border: 1px solid #ddd;">' . $feedback . '</td></tr>';
        $body .= '</table>';

        $mail->Body = $body;

        // Send email
        $mail->send();
        // Redirect to a HTML page after sending the email
        echo '<script>window.location.href = "success.html";</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $city = $_POST["city"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $reason = $_POST["reason"];
    $feedback = $_POST["feedback"];

    // Recipient email address
    $recipient_email = 'info@mcglasgo.com';

    // Subject of the email
    $subject = 'Enquiry from ' . $name;

    // Email body
    $body = "Name: $name\n";
    $body .= "City: $city\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n";
    $body .= "Reason for Enquiry: $reason\n";
    $body .= "Feedback: $feedback\n";

    // Additional headers
    $headers = "From: $email\r\n";

    // Send email using the mail() function
    if (mail($recipient_email, $subject, $body, $headers)) {
        // Redirect to a thank you page after successful submission
        header("Location: thank_you.html");
        exit;
    } else {
        // If the email failed to send, display an error message
        echo "Error: Message could not be sent.";
    }
}
?>