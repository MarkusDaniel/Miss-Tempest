<?php
    session_start();
    require('connect.php');
    
    
    // Ellenőrizzük, hogy be van-e jelentkezve valaki
    if (!isset($_SESSION["id"])) {
        header("Location: login.php");
        exit; // Biztonsági okokból azonnal kilépünk a fájlból
    }
    
    // Az aktuális felhasználó adatainak lekérdezése az adatbázisból
    $userId = $_SESSION["id"];
    $stmt = $kapcsolat->prepare("SELECT felhasznalonev FROM felhasznalok WHERE id = :id");
    $stmt->execute(['id' => $userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Ellenőrizzük, hogy sikerült-e lekérni a felhasználót
    if (!$user) {
        // Ha valamiért nem sikerült lekérni a felhasználót, akkor átirányítjuk a felhasználót a bejelentkező oldalra
        header("Location: login.php");
        exit; // Kilépés a fájlból
    }
    
    // Az aktuális felhasználó nevének megjelenítése
    $username = htmlspecialchars($user['felhasznalonev']);

        // Játék érdekességek tömbje
        $gameFacts = [
            "Did you know? Miss Tempest can dash in the air!",
            "Did you know? You can reset the level any time you want!",
            "Did you know? You can save the game any time you want!",
            "Fun Fact: The game features gems scattered throughout the levels!",
            "Trivia: Miss Tempest's turbulent punch ability is stationary!",
            "Quick Tip: Collecting gems can increase your score!",
            "Quick Tip: Avoid spikes, they are harmful!",
            "Trivia: Miss Tempest isn't invinciable while dashing! ",
            "Did you know? The boss level is full of surprises and challenges!",
            "Remember to take breaks even while gaming! Freshness improves performance.",
            "Keep in mind, this is just a game! Have fun and enjoy the adventure alongside Miss Tempest!",
            "Every new attempt is an opportunity for growth. Don't be discouraged if you don't succeed at first!",
            "Remember, every failed attempt is a new learning opportunity. That's how we become better!",
            "Fun Fact: You go to the next level by entering the door.",
            "Trivia: You can pause the game any time by pressing escape.",
        ];
    
        // Véletlenszerű érdekesség kiválasztása
        $randomFact = $gameFacts[array_rand($gameFacts)];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $username; ?></title>
    <link rel="icon" href="sprites/Miss_Tempest1.png" type="image/png">
    <link rel="stylesheet" href="forms.css">
</head>
<body> 
<div class="background"></div>

    <div class="button-container" id="usermenu">
        <h1>Welcome <?php echo $username; ?>!</h1>
        <p><?php echo $randomFact; ?></p>
        <button onclick="window.location.href='game.php'">Game-Menu</button> 
        <button onclick="window.location.href='scoreboard.php'" style="font-size: 2.9vh;">Score-board</button>
        <button id="feedbackbutton" style="font-size: 3.2vh;">Feedback</button>
        <button onclick="window.location.href='credits.php'" id="creditsbutton" style="font-size: 3vh;">Credits</button>
        <button onclick="window.location.href='logout.php'" style="font-size: 2.8vh;">Logout</button>  
    </div>

    <div class="feedback" id="feedbackForm">
            <form id="feedbackFormElement">
                <textarea id="feedbackText" name="feedback" maxlength="1000" placeholder="Write your feedback here..."></textarea>
                <button type="submit">Send Feedback</button>
                <button type="button" id="cancelButton" style="margin-left: 17.5vh">Cancel</button>
            </form>
    </div>

    <script>
        document.getElementById('feedbackbutton').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'flex';
    document.getElementById('usermenu').style.display = 'none';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('usermenu').style.display = 'flex';
    document.getElementById('feedbackText').value = ''; // Clear the textarea
    document.getElementById('feedbackText').placeholder = 'Write your feedback here...'; // Reset placeholder text
});

document.getElementById('feedbackFormElement').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the feedback text
    const feedbackText = document.getElementById('feedbackText').value;
    const username = "<?php echo $username; ?>";

    // Send the feedback via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_feedback.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                document.getElementById('feedbackText').value = '';
                document.getElementById('feedbackText').placeholder = 'Write your feedback here...';
            } else {
                alert("Error sending feedback: " + response.message);
            }
            document.getElementById('feedbackForm').style.display = 'none';
            document.getElementById('usermenu').style.display = 'flex';
        }
    };
    xhr.send(`username=${encodeURIComponent(username)}&feedback=${encodeURIComponent(feedbackText)}`);
});
    </script>

</body>
</html>