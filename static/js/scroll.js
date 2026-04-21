// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Connect Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Initialize Parallax Animations
document.addEventListener("DOMContentLoaded", function() {
    initParallax();
});

function initParallax() {
    // Hero Title Parallax
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
        gsap.to(heroTitle, {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Hero Body Parallax
    const heroBody = document.querySelector('.hero__body');
    if (heroBody) {
        gsap.to(heroBody, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Grid Items Stagger
    const gridItems = document.querySelectorAll('.card');
    if (gridItems.length > 0) {
        ScrollTrigger.batch(gridItems, {
            start: "top 85%",
            onEnter: batch => gsap.from(batch, {
                opacity: 0, 
                y: 50, 
                stagger: 0.15, 
                duration: 0.8, 
                ease: "power2.out"
            }),
            once: true // animate only once
        });
    }
    
    // Generic Parallax Elements (using data-speed)
    // Add data-speed="0.5" to any element for parallax speed
    document.querySelectorAll("[data-speed]").forEach(el => {
        const speed = parseFloat(el.getAttribute("data-speed"));
        gsap.to(el, {
            y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed * 0.1, // Simple parallax calculation
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0
            }
        });
    });
}
