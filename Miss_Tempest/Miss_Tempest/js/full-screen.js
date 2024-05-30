let isFullScreen = false;
window.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
        const canvas = document.querySelector('canvas');
        const backgroundst = document.querySelector('.background');
        if (isFullScreen) {
            canvas.style.width = '86vw';
            backgroundst.style.width = '86vw';
            
            isFullScreen = false
        } else {
            canvas.style.width = '100vw';
            backgroundst.style.width = '100vw';
            isFullScreen = true
        }
    }
});