<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/phpmailer/phpmailer/src/Exception.php';
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $city = $_POST["city"];
    $email = $_POST["email"];
    $reason = $_POST["reason"];
    $mobile = $_POST["mobile"];
    $feedback = $_POST["feedback"];


    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'bhadraraj.imagecbe@gmail.com';

        $mail->Password = 'ufgwpfkqnomhadaj';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('bhadraraj.imagecbe@gmail.com', 'Manager');  // Set recipient email address

        // Content
        $mail->isHTML(true);

        // Dynamic subject based on user's name
        $subject = 'Reg - ' . 'Chumma oru Mail';
        $mail->Subject = $subject;


        // Create an HTML table for the form data with "Regards" message
        $body = '<p>Reg -' . 'Chumma' . ',</p>';
        // Create an HTML table for the form data
        $body .= '<table border="1" cellspacing="0">';
        $body .= '<tr><td>Name</td><td>' . $name . '</td></tr>';
        $body .= '<tr><td>Email</td><td>' . $city . '</td></tr>';
        $body .= '<tr><td>Email</td><td>' . $email . '</td></tr>';
        $body .= '<tr><td>Email</td><td>' . $mobile . '</td></tr>';
        $body .= '<tr><td>Phone</td><td>' . $reason . '</td></tr>';
        $body .= '<tr><td>Feedback</td><td>' . $feedback . '</td></tr>';
        $body .= '</table>';

        $mail->Body = $body;
        
        // Redirect to a HTML page after sending the email
        echo '<script>window.location.href = "success.html";</script>';




        // echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>