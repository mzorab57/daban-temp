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

    const updateFlightSequence = () => {
      const section = document.getElementById("flight");
      const fire = document.getElementById("flight-fire");
      const drone = document.getElementById("flight-drone");
      const tanki = document.getElementById("flight-tanki");

      if (!section || !fire || !drone || !tanki) return;

      const viewportHeight = window.innerHeight || 1;
      const rect = section.getBoundingClientRect();
      const overall = clamp(
        (viewportHeight - rect.top) / Math.max(rect.height + viewportHeight * 0.85, 1),
        0,
        1
      );
      const segmentProgress = (start, end) =>
        clamp((overall - start) / Math.max(end - start, 0.001), 0, 1);

      const fireProgress = segmentProgress(0.0, 0.16);
      const droneProgress = segmentProgress(0.24, 0.42);
      const tankiProgress = segmentProgress(0.52, 0.72);

      fire.style.opacity = "1";
      fire.style.transform = `translate3d(0, ${20 - fireProgress * 20}%, 0)`;

      drone.style.opacity = droneProgress.toFixed(3);
      drone.style.transform = `translate3d(${-20 + droneProgress * 20}%, ${12 - droneProgress * 12}%, 0)`;

      tanki.style.opacity = tankiProgress.toFixed(3);
      tanki.style.transform = `translate3d(${18 - tankiProgress * 18}%, ${12 - tankiProgress * 12}%, 0)`;
    };

    const updateSceneEffects = () => {
      frameId = 0;
      updateMountainParallax();
      updateFlightSequence();
    };

    const requestSceneEffectsUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateSceneEffects);
    };

    // Webflow/Slater scripts continue adjusting layout right after mount.
    // Run a few startup syncs so refreshing mid-page does not leave the mountain hidden.
    const syncSceneEffects = () => {
      requestSceneEffectsUpdate();
      followUpTimerId = window.setTimeout(requestSceneEffectsUpdate, 250);
      settleTimerId = window.setTimeout(requestSceneEffectsUpdate, 800);
    };

    loadSiteScripts()
      .catch((err) => console.error("Site scripts failed:", err))
      .finally(syncSceneEffects);

    initTimerId = window.setTimeout(syncSceneEffects, 100);

    window.addEventListener("scroll", requestSceneEffectsUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestSceneEffectsUpdate);
    window.addEventListener("orientationchange", requestSceneEffectsUpdate);
    window.addEventListener("load", syncSceneEffects);

    return () => {
      window.clearTimeout(initTimerId);
      window.clearTimeout(followUpTimerId);
      window.clearTimeout(settleTimerId);
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestSceneEffectsUpdate);
      window.removeEventListener("resize", requestSceneEffectsUpdate);
      window.removeEventListener("orientationchange", requestSceneEffectsUpdate);
      window.removeEventListener("load", syncSceneEffects);
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
