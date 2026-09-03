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

let audioContext;

function playHoverSound() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";

  oscillator.frequency.setValueAtTime(700, audioContext.currentTime);

  gain.gain.setValueAtTime(0.015, audioContext.currentTime);

  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.06,
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.06);
}

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", playHoverSound);
});
