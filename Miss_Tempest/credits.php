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
    <link rel="stylesheet" href="forms.css">
    <style>

    </style>
</head>
<body>
    <div class="background"></div>

    <div class="button-container">
        <div class="credit-container">
            <h1>Credits</h1>
            
            <p style="border-bottom: 0.2vh solid #412f26; border-top: 0.2vh solid #412f26;">
                The in-game backgroundmusic is from <a href="https://www.youtube.com/channel/UCmTSFGilmor08sxHzyjne4g" target="_blank" class="no-underline">Finntroll</a>. <br> 
                
                </p>
                    
                <p  style="border-bottom: 0.2vh solid #412f26;">
                The boss-fight music is from <a href="https://www.youtube.com/channel/UC8A1oMG8Fga-xKNwOmmQV6Q" target="_blank" class="no-underline">Infrared Scale</a>. <br>
                </p>
                    
                <p  style="border-bottom: 0.2vh solid #412f26;">
                Other soundeffects are mainly from <a href="https://pixabay.com/" target="_blank" class="no-underline">Pixabay</a>. <br>
                </p>
                    
                <p style="border-bottom: 0.2vh solid #412f26;">
                The art assets are all done by myself. <br>
                If you are curious about my other works check out my <a href="https://www.deviantart.com/draymedash/gallery" target="_blank" class="no-underline">Deviantart</a>. <br>
                
            </p>
            <button onclick="window.location.href='user.php'" style="font-size: 2vh;">Back</button>
        </div>
        
    </div>

</body>
</html>