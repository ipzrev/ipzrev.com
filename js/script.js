const lenis = new Lenis({
  duration: 0.9,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* sound */

const hoverSound = document.getElementById("hoverSound");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.volume = 0.15;

    hoverSound.play().catch(() => {});
  });
});
