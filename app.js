const progressFill = document.getElementById("progressFill");
const revealTargets = document.querySelectorAll("[data-reveal], .draw-line, .play-overlay");
const walkthroughVideo = document.getElementById("walkthroughVideo");
const playOverlay = document.getElementById("playOverlay");
const videoFrame = document.querySelector(".video-frame");
const SITE_ORIGIN = "https://ortizfram.github.io/tarakundalini-hyatt";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      if (entry.target.classList.contains("draw-line")) {
        entry.target.classList.add("is-drawn");
      }
      if (entry.target.classList.contains("play-overlay")) {
        entry.target.classList.add("is-drawn");
      }
    });
  },
  { threshold: 0.22 }
);

revealTargets.forEach((element) => observer.observe(element));

const sectionDivider = document.querySelector(".section-divider");
if (sectionDivider) {
  observer.observe(sectionDivider);
}

const updateProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = total > 0 ? (scrollTop / total) * 100 : 0;
  progressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

if (playOverlay && walkthroughVideo) {
  const attemptAutoplay = async () => {
    try {
      await walkthroughVideo.play();
      videoFrame?.classList.add("is-playing");
    } catch (error) {
      console.warn("Autoplay blocked, waiting for manual play", error);
    }
  };

  attemptAutoplay();

  playOverlay.addEventListener("click", async () => {
    try {
      videoFrame?.classList.add("is-playing");
      await walkthroughVideo.play();
      playOverlay.style.opacity = "0";
      playOverlay.style.pointerEvents = "none";
    } catch (error) {
      console.warn("Video playback failed", error);
    }
  });

  walkthroughVideo.addEventListener("pause", () => {
    videoFrame?.classList.remove("is-playing");
    playOverlay.style.opacity = "1";
    playOverlay.style.pointerEvents = "auto";
  });

  walkthroughVideo.addEventListener("play", () => {
    videoFrame?.classList.add("is-playing");
    playOverlay.style.opacity = "0";
    playOverlay.style.pointerEvents = "none";
  });

  walkthroughVideo.addEventListener("ended", () => {
    videoFrame?.classList.remove("is-playing");
    playOverlay.style.opacity = "1";
    playOverlay.style.pointerEvents = "auto";
  });
}

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll('img[src^="./assets/"], video[src^="./assets/"]').forEach((element) => {
  const rawSrc = element.getAttribute("src");
  if (!rawSrc) return;
  element.src = `${SITE_ORIGIN}/${rawSrc.replace(/^\.\/?/, "")}`;
});
