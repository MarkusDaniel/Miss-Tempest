<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Score-Board</title>
    <link rel="icon" href="sprites/Miss_Tempest1.png" type="image/png">
    <link rel="stylesheet" href="forms.css">

</head>
<body>
    <div class="background"></div>
    <div class= flex-box>
        <div class="scroll-box">
            <p>Score-Board</p>
            <p></p>
            <?php
            require('connect.php');
            
            $stmt = $kapcsolat->query("SELECT felhasznalonev, score FROM felhasznalok ORDER BY score DESC");
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            if ($users) {
                foreach ($users as $user) {
                    echo '<div class="user-entry">';
                    echo '<div class="user-name">' . htmlspecialchars($user['felhasznalonev']) . '</div>';
                    echo '<div class="user-score">' . htmlspecialchars($user['score']) . '</div>';
                    echo '</div>';
                }
            } else {
                echo '<p>There are no players.</p>';
            }
            ?>
        </div>
        <button onclick="goBack()" class="Back">Go Back</button>
        
    </div>
    

<script>
    function goBack() {
        window.history.back();
    }
</script>
    
</body>
</html>
