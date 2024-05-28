<?php
    // update-gemcollected.php
    
    // Szükséges az adatbázis kapcsolat létrehozása
    require('connect.php');
    
    // Ellenőrizzük, hogy be van-e jelentkezve valaki
    session_start();
    if (!isset($_SESSION["id"])) {
        header("Location: user.php");
        exit; // Biztonsági okokból azonnal kilépünk a fájlból
    } 

    // Frissítjük a gemcollected értékét a POST adatok alapján
    if(isset($_POST['gemcollected'])) {
        // Példa: Az adatbázis táblában a gemcollected értékét frissítjük az új értékre
        // $_SESSION["id"] tartalmazza a felhasználó azonosítóját
        $userId = $_SESSION["id"];
        $newGemCollectedValue = $_POST['gemcollected'];
        // A valós adatbázis módosítás megfelelő SQL parancsokkal történik
        // Példa: "UPDATE users SET gemcollected = '$newGemCollectedValue' WHERE id = '$userId'";
        // Ide illesztheted be az adatbázis frissítő kódot
        // ...
        
        // A szerver válasz tartalmazhat bármilyen információt a frissítés sikerességéről vagy hibáiról
        $response = array("success" => true, "message" => "Gemcollected successfully updated");
        echo json_encode($response);
    } else {
        // Ha nem érkezett megfelelő adat a POST kéréssel
        $response = array("success" => false, "message" => "No gemcollected value provided");
        echo json_encode($response);
    }
?>

