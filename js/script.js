const video = document.getElementById("myVideo");

video.addEventListener("mouseenter", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0;
});
