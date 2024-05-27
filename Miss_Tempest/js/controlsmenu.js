document.getElementById('controlsButton').addEventListener('click', function() {
    document.querySelector('.controls').style.display = 'flex';
});

// Elrejti a vezérlőelemeket, ha bármilyen inputot ad a felhasználó
window.addEventListener('keydown', hideControls);
window.addEventListener('mousemove', hideControls);

function hideControls() {
    document.querySelector('.controls').style.display = 'none';
}
