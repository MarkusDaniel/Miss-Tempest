<?php

    session_start();
    require('connect.php');
    
    // Ellenőrizzük, hogy be van-e jelentkezve valaki
    if (!isset($_SESSION["id"])) {
        header("Location: user.php");
        exit; // Biztonsági okokból azonnal kilépünk a fájlból
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
    <script src="js/controlsmenu.js"></script>
    <script src="js/utilities.js"></script>
    <script src="js/Data/collisions.js"></script>
    <script src="js/Data/platformcolls.js"></script>
    <script src="js/Classes/collisionBlock.js"></script>
    <script src="js/Classes/Sprite.js"></script>
    <script src="js/Classes/Gem.js"></script>
    <script src="js/Classes/Obstacle.js"></script>
    <script src="js/Classes/Player.js"></script>
    <script src="js/Classes/Enemy.js"></script>
    <script src="js/Classes/Barrier.js"></script>
    <script src="js/Classes/Bullet.js"></script>
    <script src="js/Classes/Boss.js"></script>
    <script src="js/EventListeners.js"></script>
    <script src="js/Data/levels.js"></script>
    <script src="js/full-screen.js"></script>
    <script src="index.js"></script>
    <script src="js/Server/checkUserProgress.js"></script>
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
                if (level === 1 && gemcollected === 0 && health === 3) {
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