import { useEffect, useRef } from "react";
import SiteHead from "./components/SiteHead";
import Home from "./pages/Home";
import { loadSiteScripts } from "./services/loadSiteScripts";
import "./styles/siteStyles.css";

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
    loadSiteScripts().catch((err) => console.error("Site scripts failed:", err));

    const handleScroll = () => {
      const mountain = document.getElementById("piercing-mountain");
      if (!mountain) return;
      const scrollY = window.scrollY;
      
      const startScroll = window.innerHeight * 0.1; 
      const endScroll = startScroll + window.innerHeight; 
      
      let progress = 0;
      if (scrollY >= startScroll) {
          progress = Math.min((scrollY - startScroll) / (endScroll - startScroll), 1);
      }
      
      const yValue = 100 - (progress * 100);
      mountain.style.transform = `translateY(${yValue}%)`;
      mountain.style.opacity = progress.toString();
    };
    
    // Use setTimeout to ensure DOM has rendered
    setTimeout(() => {
        handleScroll();
    }, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
