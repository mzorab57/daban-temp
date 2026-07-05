function loadScript(src, options = {}) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.type = options.type || "text/javascript";
    if (options.integrity) script.integrity = options.integrity;
    if (options.crossOrigin) script.crossOrigin = options.crossOrigin;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function loadStylesheet(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export async function loadSiteScripts() {
  loadStylesheet("https://cdn.jsdelivr.net/npm/lenis@1.2.3/dist/lenis.css");

  await loadScript(
    "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68b57ef5ef86011d9b251e8e",
    {
      integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
      crossOrigin: "anonymous",
    }
  );
  await loadScript(
    "https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/js/webflow.schunk.79b71263bda4d666.js",
    {
      integrity: "sha384-4uIagmvPqpx77EY2wVIXV1VyDxpcA12OiM4ePi998Z6JiIZuQW6Zl17s8wKJyfZQ",
      crossOrigin: "anonymous",
    }
  );
  await loadScript(
    "https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/js/webflow.a0aa6ca1.38bff8ac21973156.js",
    {
      integrity: "sha384-h9pn7JMoC8ISkUF0+VuUajCizGni0PC7ex2ZwG/ir2q8QUhZI7N+mlA2+e6KYZ7a",
      crossOrigin: "anonymous",
    }
  );

  const parallel = [
    "https://unpkg.com/@barba/core",
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js",
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/CustomEase.min.js",
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js",
    "https://cdn.jsdelivr.net/npm/lenis@1.2.3/dist/lenis.min.js",
    "https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js",
    "https://cdn.jsdelivr.net/npm/globe.gl",
  ];
  await Promise.all(parallel.map((src) => loadScript(src)));

  const slaterSrc = window.location.host.includes("webflow.io")
    ? "https://slater.app/16759.js"
    : "https://assets.slater.app/slater/16759.js?v=1.0";
  await loadScript(slaterSrc, { type: "module" });
}
