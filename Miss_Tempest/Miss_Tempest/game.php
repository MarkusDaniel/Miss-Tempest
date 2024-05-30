<?php

    session_start();
    require('connect.php');
    
    // Ellenőrizzük, hogy be van-e jelentkezve valaki
    if (!isset($_SESSION["id"])) {
        header("Location: user.php");
        exit; // Biztonsági okokból azonnal kilépünk a fájlból
    } 

    // Ellenőrizzük, hogy az oldalról érkező kérés tartalmaz-e érvényes azonosítót
    if (!isset($_SERVER['HTTP_REFERER']) || parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) !== $_SERVER['HTTP_HOST']) {
    // Ha nincs vagy nem egyezik az azonosító, akkor hibát dobunk és kiléptetjük a felhasználót
    http_response_code(403); // Forbidden HTTP válasz
    echo "Forbidden";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miss-Tempest</title>
    <link rel="icon" href="sprites/Miss_Tempest1.png" type="image/png">
    <link rel="stylesheet" href="style.css">
    <style>
        canvas {
            width: 86vw;
        }
    </style>
</head>
<body>
    <div class="background"></div>

    <div class="button-container">
        <button id="startGameButton"> PLAY </button>
        <button id="continueButton">Continue</button>
        <button id="controlsButton">Controls</button>
        <p></p>
        <button onclick="window.location.href='user.php'">Back</button>
    </div>

    <div class="controls">
        <h1>Controls</h1>
        <p>Menu:<span style="margin-left: 35vh; color: #a0e573;">esc</span></p>
        <p>Movement:<span style="margin-left: 25vh; color: #a0e573;">w a d</span></p>
        <p class="or">or</p>
        <p style="margin-left: 38vh; color: #a0e573;">arrow keys</p>
        <p>Attack:<span style="margin-left: 34vh; color: #a0e573;">x</span></p>
        <p>Dash:<span style="margin-left: 38vh; color: #a0e573;">v</span></p>
        <p>Enter-Doors:<span style="margin-left: 10vh; color: #a0e573;">w or arrow-up</span></p>
    </div>

    <div class="pause_menu">
        <h1>Menu</h1>
        <p></p>
        <button id="resumebutton">Resume</button>
        
        <button id="resetbutton">Reset</button>
        
        <button id="saveButton">Save</button>
        
        <button id="quitbutton">Quit</button>
    </div>

    <canvas></canvas>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <?php include 'include-scripts.php'; ?>
    <script>

    fetch('progressiongame.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const userData = data.data;
                //console.log('User Data:', userData); // Debug log for user data

                // Convert data to integers for comparison
                level = parseInt(userData.level);
                serverHealth = parseInt(userData.health);
                serverGemCollected = parseInt(userData.gemcollected);

                // Check if all conditions are met
                if (level === 1 && serverGemCollected === 0 && serverHealth === 3) {
                    document.getElementById('continueButton').style.display = 'none';
                } else {
                    document.getElementById('continueButton').style.display = 'flex';
                }
            } else {
                console.error("Hiba: " + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    </script>
</body>
</html>