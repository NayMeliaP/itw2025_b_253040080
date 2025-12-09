document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.querySelector('.boxes');
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-10px';
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = Math.random() * 4 + 6 + 's';

        particleContainer.appendChild(particle);
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    };
    setInterval(createParticle, 300);
});

