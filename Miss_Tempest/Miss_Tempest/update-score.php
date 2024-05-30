<?php
session_start();
require('connect.php');

if (!isset($_SESSION['id'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$userId = $_SESSION['id'];
$newScore = isset($_POST['score']) ? (int)$_POST['score'] : 0;
$gemcollected = isset($_POST['gemcollected']) ? (int)$_POST['gemcollected'] : 0;

try {
    // Lekérjük a felhasználó jelenlegi pontszámát
    $stmt = $kapcsolat->prepare("SELECT score FROM felhasznalok WHERE id = :id");
    $stmt->execute(['id' => $userId]);
    $currentScore = $stmt->fetchColumn();

    // Ellenőrizzük, hogy az új pontszám nagyobb-e, mint a jelenlegi
    if ($newScore > $currentScore) {
        $updateStmt = $kapcsolat->prepare("UPDATE felhasznalok SET score = :score WHERE id = :id");
        $updateStmt->execute(['score' => $newScore, 'id' => $userId]);
        echo json_encode(['success' => true, 'message' => 'Score updated']);
    } else {
        echo json_encode(['success' => false, 'message' => 'New score is not higher than current score']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
