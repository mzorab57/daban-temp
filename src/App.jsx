import { useEffect, useRef } from "react";
import SiteHead from "./components/SiteHead";
import { loadSiteScripts } from "./services/loadSiteScripts";
import bodyHtml from "./templates/body.html?raw";
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
  const contentRef = useRef(null);
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    initWebflowClasses();
  }, []);

  useEffect(() => {
    if (!contentRef.current || scriptsLoaded.current) return;
    scriptsLoaded.current = true;
    loadSiteScripts().catch((err) => console.error("Site scripts failed:", err));

    const handleScroll = () => {
      const mountain = document.getElementById("piercing-mountain");
      if (!mountain) return;
      const scrollY = window.scrollY;
      
      const startScroll = window.innerHeight * 1; 
      const endScroll = startScroll + window.innerHeight; 
      
      let progress = 0;
      if (scrollY >= startScroll) {
          progress = Math.min((scrollY - startScroll) / (endScroll - startScroll), 1);
      }
      
      const yValue = 100 - (progress * 100);
      mountain.style.transform = `translateY(${yValue}%)`;
      mountain.style.opacity = progress;
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SiteHead />
      <div
        ref={contentRef}
        className="body"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </>
  );
}
