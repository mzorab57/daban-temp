import { useEffect, useRef } from "react";
import SiteHead from "./SiteHead";
import { loadSiteScripts } from "./loadSiteScripts";
import bodyHtml from "./assets/body.html?raw";
import "./siteStyles.css";

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
