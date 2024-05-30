<?php
session_start();

// Ellenőrizzük, hogy be van-e jelentkezve valaki
if (isset($_SESSION["id"])) {
    header("Location: user.php");
    exit; // Biztonsági okokból azonnal kilépünk a fájlból
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="sprites/Miss_Tempest1.png" type="image/png">
    <link rel="stylesheet" href="forms.css">
    <style>
        .alert {
            display: none;
            background-color: #f44336;
            color: white;
            padding: 10px;
            margin-bottom: 15px;
            border: none;
            text-align: center;
        }
        .alert.show {
            display: block;
        }
    </style>
</head>
<body>
    <div class="background"></div>
    <form id="login-form" class="registration-form">
        <div id="alert" class="alert"></div>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" maxlength="20" required><br>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" maxlength="20" required><br>
        <input type="submit" value="Login">
    </form>

    <script src="js/Server/wrong_login.js"></script>
</body>
</html>
