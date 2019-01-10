<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

if ($method == 'POST' && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try {
        $mail = new PHPMailer(true);    
        $mail->SMTPDebug = 0;                               
        $mail->isSMTP();                                 
        $mail->Host = 'smtp.gmail.com';  			
        $mail->SMTPAuth = true;                              
        $mail->Username = 'example@gmail.com';             
        $mail->Password = 'LrQ2KSSeJ6El';
        $mail->SMTPSecure = 'tls';                          
        $mail->Port = 587;        
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('example@gmail.com', 'Odontología');
        $mail->addAddress("correoparamensaje@example.com");
        //$mail->AddEmbeddedImage('../dist/assets/img/sgc.png', 'logo_2u');
        $mail->isHTML(true);                           
        $mail->Subject = 'Notificación, mensaje nuevo';
        $mail->Body = " 
        <html>
            <body style= \"background: #000; color: #fff; padding: 19px; text-align: center;\">
                <header style =\"font-family:\'Sans Serif\';\">
                    <img style = \"max-width: 250px;\" src='cid:logo_2u' />
                    <h1 style= \" color: #ffffff; font-size:22px;\">
                        <strong style= \"color: #ffffff;\">Mensaje recibido de</strong> $name ($email)!<br><br>
                    $message</h1>
                </header>
                <p style = \"font-size: 22px; color: #fff;\">Cordialmente, la Dra.</p>
            </body>
        </html>";
        $mail->AltBody = "Nuevo mensaje recibido";
        $mail->send();
        echo json_encode("success");

    } catch (Exception $e) {
        echo json_encode('failure');
    }
} else {
    echo json_encode("something went wrong");
}


?>
