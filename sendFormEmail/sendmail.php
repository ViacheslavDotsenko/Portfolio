<?php
/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'en', 'phpmailer/language/');
$mail->IsHTML(true);

//from messag
$mail->setFrom('#', 'Viacheslav');
//to messag
$mail->addAddress('#');
//theme messag
$mail->Subject = 'hello ! its "Viacheslav"';

//made in
$made = "USA";
if($_POST['made'] == "Europe"){
    $made = "Europe";
}

//body messag
$body = '<h1> super messag</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if()