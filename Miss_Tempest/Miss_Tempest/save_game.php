<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require('connect.php');

if (!isset($_SESSION["id"])) {
    header("Location: user.php");
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$level = $input['level'];
$health = $input['health'];
$gemcollected = $input['gemcollected'];

if ($gemcollected > 150) {
    $gemcollected = 150;
}

$userId = $_SESSION["id"];

try {
    $sql = "UPDATE felhasznalok SET level = :level, health = :health, gemcollected = :gemcollected WHERE id = :userId";
    $stmt = $kapcsolat->prepare($sql);
    $stmt->execute([
        ':level' => $level,
        ':health' => $health,
        ':gemcollected' => $gemcollected,
        ':userId' => $userId
    ]);

    echo json_encode(["message" => "Game saved successfully"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Failed to save the game", "error" => $e->getMessage()]);
}
?>
