function checkUserProgress() {
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
}

// Initial check when the page loads
checkUserProgress();