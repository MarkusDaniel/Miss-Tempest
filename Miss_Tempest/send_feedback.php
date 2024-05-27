<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $feedback = htmlspecialchars($_POST['feedback']);

    $to = "draymedash12@gmail.com";
    $subject = "Miss-Tempest Feedback";
    $body = "Dear Drayme,\n\n$feedback";
    $headers = "From: $username@misstempest.com"; // You can customize the From address

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
