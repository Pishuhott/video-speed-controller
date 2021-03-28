document.addEventListener('DOMContentLoaded', function () {
    const speed = document.querySelector('.speed');
    const bar = document.querySelector('.speed__bar');
    const video = document.querySelector('.video');

    function handleMove (e) {
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const min = 0.2;
        const max = 5;
        const height = Math.round(percent * 100) + '%';
        const playbackRate = percent * (max - min) + min;
        bar.style.height = height;
        bar.textContent = playbackRate.toFixed(2) + ' X';
        video.playbackRate = playbackRate;
    }

    speed.addEventListener('mousemove', handleMove);
});
