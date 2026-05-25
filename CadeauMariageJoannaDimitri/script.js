// Enable music playback on first user interaction (touch or click)
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('wedding-audio');
    if (!audio) return;
    let played = false;
    function playAudioOnce() {
        if (!played) {
            audio.play().catch(() => {});
            played = true;
            window.removeEventListener('touchstart', playAudioOnce);
            window.removeEventListener('mousedown', playAudioOnce);
        }
    }
    window.addEventListener('touchstart', playAudioOnce, { once: true });
    window.addEventListener('mousedown', playAudioOnce, { once: true });
});
// Particle effect
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);

    // Particle settings
    const PARTICLE_COUNT = 100;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.5,
            r: 1.5 + Math.random() * 2.5,
            d: 0.5 + Math.random() * 1.5,
            alpha: 0.3 + Math.random() * 0.7,
            dx: (Math.random() - 0.5) * 0.3,
            dy: 0.2 + Math.random() * 0.4
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let p of particles) {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = '#e3cfa2';
            ctx.shadowColor = '#fffbe9';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.restore();
        }
    }

    function update() {
        for (let p of particles) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.y > height * 0.6 || p.x < 0 || p.x > width) {
                p.x = Math.random() * width;
                p.y = -10;
            }
        }
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }
    animate();
});
function contributeUrne() {
    // Remplacez ce lien par votre vrai lien PayPal.me
    window.open('https://www.paypal.me/votreLienIci', '_blank');
}
