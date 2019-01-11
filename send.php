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
        $mail->Username = '';             
        $mail->Password = '#';
        $mail->SMTPSecure = 'tls';                          
        $mail->Port = 587;        
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('example@gmail.com', 'Odontología');
        $mail->addAddress("correoalqueseenviará");
        //$mail->AddEmbeddedImage('../dist/assets/img/sgc.png', 'logo_2u');
        $mail->isHTML(true);                           
        $mail->Subject = 'Notificación, mensaje nuevo';
        $mail->Body = " 
        <html>
            <body style= \"background: #000; color: #fff; padding: 19px; text-align: center;\">
                <header style =\"font-family:\'Sans Serif\';\">
                    <img style = \"max-width: 250px;\" src='cid:logo_2u' />
                    <h1 style= \" color: #ffffff; font-size:22px;\">
                        <strong style= \"color: #ffffff;\">Mensaje recibido de</strong> $name $email!<br><br>
                    $message</h1>
                </header>
                <p style = \"font-size: 22px; color: #fff;\">Cordialmente, Dra. María Alejandra Manosalva</p>
            </body>
        </html>";
        $mail->AltBody = "Nuevo mensaje recibido";
        $mail->send();


        $mail2 = new PHPMailer(true);    
        $mail2->SMTPDebug = 0;                               
        $mail2->isSMTP();                                 
        $mail2->Host = 'smtp.gmail.com';  			
        $mail2->SMTPAuth = true;                              
        $mail2->Username = '';             
        $mail2->Password = '';
        $mail2->SMTPSecure = 'tls';                          
        $mail2->Port = 587;        
        $mail2->CharSet = 'UTF-8';
        $mail2->setFrom('example@gmail.com', 'Odontología');
        $mail2->addAddress($email);
        //$mail->AddEmbeddedImage('../dist/assets/img/sgc.png', 'logo_2u');
        $mail2->isHTML(true);                           
        $mail2->Subject = 'Notificación, mensaje enviado.';
        $mail2->Body = " 
        <html>
            <body style= \"background: #000; color: #fff; padding: 19px; text-align: center;\">
                <header style =\"font-family:\'Sans Serif\';\">
                    <img style = \"max-width: 250px;\" src='cid:logo_2u' />
                    <h1 style= \" color: #ffffff; font-size:22px;\">
                        <strong style= \"color: #ffffff;\">Mensaje recibido estimado</strong> $name, pronto te responderemos.<br><br>
                        </h1>
                </header>
                <p style = \"font-size: 22px; color: #fff;\">Cordialmente, Dra. María Alejandra Manosalva</p>
            </body>
        </html>";
        $mail2->AltBody = "¡Gracias por tus comentarios!";
        $mail2->send();

        echo json_encode("success");

    } catch (Exception $e) {
        echo json_encode('failure');
    }
} else {
    echo json_encode("failure2");
}


?>
