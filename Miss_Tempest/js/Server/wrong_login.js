document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'handle_login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText.includes('Wrong username or password!')) {
                showAlert('Wrong username or password!');
            } else {
                window.location.href = 'user.php';
            }
        }
    };

    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
});

function showAlert(message) {
    var alertBox = document.getElementById('alert');
    alertBox.innerText = message;
    alertBox.classList.add('show');

    document.addEventListener('click', hideAlert);
    document.addEventListener('keydown', hideAlert);
}

function hideAlert() {
    var alertBox = document.getElementById('alert');
    alertBox.classList.remove('show');

    document.removeEventListener('click', hideAlert);
    document.removeEventListener('keydown', hideAlert);
}