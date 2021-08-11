<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$sum = $_POST['sum'];
$email = $_POST['email'];

function parser($url){
    $url = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($url);
    if($result == false) {
        echo "Ошибка отправки запроса: " . curl_error($curl);
        return false;
    }else{
        return true;
    }
}

$message .= "Новая Заявка";
$message .= "Имя: " .$name;
$message .= "Телефон: " .$phone;
$message .= "Сумма: " .$sum;
$message .= "E-mail: " .$email;

$token = "1838618816:AAHW93nhVPcIQTmUSrpgwuOlqTZ2hUxQHiY";
$chat_id = "-1001520039431";

parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");

