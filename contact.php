<?php
  $name = $POST['name'];
  $email = $POST['email'];
  $message = $POST['message'];

  $email_from = 'Styles Restraunt Site';
  $email_subject = 'New Message From Styles';
  $email_body = "Name: $name.\n".
                "Email Address: $email.\n".
                "Message: $message.\n";

  $to = "daymonabbott@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("location: index.html");


?>