import { useEffect, useRef } from "react";
import SiteHead from "./components/SiteHead";
import Home from "./pages/Home";
import { loadSiteScripts } from "./services/loadSiteScripts";
import "./styles/siteStyles.css";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function initWebflowClasses() {
  const html = document.documentElement;
  const touch =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch);
  html.className += " w-mod-js";
  if (touch) html.className += " w-mod-touch";
}

export default function App() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    initWebflowClasses();
  }, []);

  useEffect(() => {
    if (scriptsLoaded.current) return;
    scriptsLoaded.current = true;

    let frameId = 0;
    let initTimerId = 0;
    let followUpTimerId = 0;
    let settleTimerId = 0;

    const updateMountainParallax = () => {
      frameId = 0;

      const mountain = document.getElementById("piercing-mountain");
      const scene = document.getElementById("sky-bg-hero");

      if (!mountain || !scene) return;

      const viewportHeight = window.innerHeight || 1;
      const viewportWidth = window.innerWidth || 1;
      const isMobile = viewportWidth <= 767;
      const rect = scene.getBoundingClientRect();
      const revealStart = viewportHeight * 1.02;
      const revealEnd = viewportHeight * 0.34;
      const restingOffset = isMobile ? -70 : -16;
      const scale = isMobile ? 1.7 : 1;
      const progress = clamp(
        (revealStart - rect.top) / (revealStart - revealEnd),
        0,
        1
      );
      const translateY = 100 + (restingOffset - 100) * progress;

      mountain.style.transform = `translate3d(0, ${translateY}%, 0) scale(${scale})`;
      mountain.style.opacity = progress.toFixed(3);
    };

    const requestMountainParallaxUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateMountainParallax);
    };

    // Webflow/Slater scripts continue adjusting layout right after mount.
    // Run a few startup syncs so refreshing mid-page does not leave the mountain hidden.
    const syncMountainParallax = () => {
      requestMountainParallaxUpdate();
      followUpTimerId = window.setTimeout(requestMountainParallaxUpdate, 250);
      settleTimerId = window.setTimeout(requestMountainParallaxUpdate, 800);
    };

    loadSiteScripts()
      .catch((err) => console.error("Site scripts failed:", err))
      .finally(syncMountainParallax);

    initTimerId = window.setTimeout(syncMountainParallax, 100);

    window.addEventListener("scroll", requestMountainParallaxUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestMountainParallaxUpdate);
    window.addEventListener("orientationchange", requestMountainParallaxUpdate);
    window.addEventListener("load", syncMountainParallax);

    return () => {
      window.clearTimeout(initTimerId);
      window.clearTimeout(followUpTimerId);
      window.clearTimeout(settleTimerId);
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestMountainParallaxUpdate);
      window.removeEventListener("resize", requestMountainParallaxUpdate);
      window.removeEventListener(
        "orientationchange",
        requestMountainParallaxUpdate
      );
      window.removeEventListener("load", syncMountainParallax);
    };
  }, []);

  return (
    <>
      <SiteHead />
      <div className="body">
        <Home />
      </div>
    </>
  );
}
