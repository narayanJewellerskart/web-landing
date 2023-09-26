<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $city = $_POST["city"];
    $jeweller = $_POST["flexRadioDefault"];

    header("Location:index.html");

    exit();
}
?>
