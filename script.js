// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initAnimations();
    initParticles();
});

// 1. Configurar Lenis para scroll suave
function initSmoothScroll() {
    const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integración con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => ScrollTrigger.update(time));
    gsap.ticker.lagSmoothing(0);
}

// 2. Configurar animaciones GSAP
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del título principal
    gsap.to(".main-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".ci-cd-section",
            start: "top center",
            toggleActions: "play none none none"
        }
    });

    // Animación de la definición
    gsap.to(".definition", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".ci-cd-section",
            start: "top center",
            toggleActions: "play none none none"
        }
    });

    // Animación de las tarjetas de beneficios
    document.querySelectorAll('.benefit-card').forEach(card => {
        const delay = parseFloat(card.getAttribute('data-delay')) || 0;
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5 + delay,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animación de los ítems de optimización
    document.querySelectorAll('.optimize-item').forEach(item => {
        const delay = parseFloat(item.getAttribute('data-delay')) || 0;
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.8 + delay,
            scrollTrigger: {
                trigger: ".optimizes-section",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
}

// 3. Configurar partículas
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#00ffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: "#ff00ff", 
                    opacity: 0.3, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 2, 
                    direction: "none", 
                    random: true, 
                    straight: false, 
                    out_mode: "out" 
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
}