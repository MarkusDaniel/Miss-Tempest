<?php
session_start();

require('connect.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $stmt = $kapcsolat->prepare("SELECT id, felhasznalonev FROM felhasznalok WHERE felhasznalonev = :username AND jelszo = :password");
    $stmt->execute([
        'username' => $username,
        'password' => md5($password)
    ]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION["id"] = $user["id"];
        $_SESSION["username"] = $user["felhasznalonev"];
        echo 'Successful login!';
    } else {
        echo 'Wrong username or password!';
    }
}
?>
