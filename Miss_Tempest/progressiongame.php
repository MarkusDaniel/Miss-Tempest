<?php
session_start();
require('connect.php');

// Ellenőrizzük, hogy be van-e jelentkezve valaki
if (!isset($_SESSION["id"])) {
    echo json_encode(['error' => 'User not logged in']);
    exit; // Biztonsági okokból azonnal kilépünk a fájlból
} 

$userId = $_SESSION["id"];

try {
    // Lekérdezés a felhasználóhoz tartozó adatokért
    $stmt = $kapcsolat->prepare("SELECT level, health, gemcollected FROM felhasznalok WHERE id = :id");
    $stmt->execute(['id' => $userId]);
    $userData = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($userData) {
        echo json_encode(['success' => true, 'data' => $userData]);
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>

