<?php
if(isset($_POST['save']))
{
 $captchaResult = $_POST["captchaResult"];
 $firstNumber = $_POST["firstNumber"];
 $secondNumber = $_POST["secondNumber"];

 $checkTotal = $firstNumber + $secondNumber;
if($checkTotal==$captchaResult)
{

$to = "madhu@bonvera.in";
//$to = "gorakh.infotrench@gmail.com";
$from = $_POST['name'];
$subject="Bonvera Query";
$headers .= 'Bcc: abhishek.infotrench@gmail.com';
$message = '
   Details:
    
    Name : '.ucfirst($_POST['name']).'
   
   Email ID : '.ucfirst($_POST['email']).'
   
   Contact No   : '.$_POST['mob'].'
   
   Subject : '.ucfirst($_POST['sub']).'
   
  massage : '.ucfirst($_POST['msg']).'';
    
    mail($to, $subject, $message,$headers);

header("Location:index.php");
}
else
{
echo '<script type="text/javascript">'; 
echo 'alert("Try again your captcha is wrong");'; 
echo 'window.location.href = "index.php";';
echo '</script>';
}
}
?>