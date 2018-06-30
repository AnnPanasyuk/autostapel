<?php
    $subject = 'Заявка с сайта';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['text'])) {
        $name = substr(htmlspecialchars(trim($_POST['text'])), 0, 100);
        $mess .= '<b>Имя:</b>' . $name . '<br>';
    }
    if(isset($_POST['phone'])) {
        $tel = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
        $mess .= '<b>Телефон:</b>' . $tel . '<br>';
    }
    if(isset($_POST['email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
        $mess .= '<b>Почта:</b>' . $mail . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('panasyuk20anna@gmail.com','Ann');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>