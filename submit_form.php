<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "fauziramdani234@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Membuat pesan email
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Mengirim email
   if(mail($to, $subject, $email_message, $headers)){
    echo "Email Sent";
   }else{
    echo "Email Sent Failed";
   }
}
?>
