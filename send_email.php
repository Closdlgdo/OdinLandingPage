<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'cidstp031921@gmail.com'; // Replace with your own email address
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send the email
  if (mail($to, $subject, $body)) {
    echo 'Email sent successfully!';
  } else {
    echo 'Failed to send email. Please try again later.';
  }
}
?>
