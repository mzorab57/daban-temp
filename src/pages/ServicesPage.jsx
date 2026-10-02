import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlyphPortal from "../components/ui/GlyphPortal";

export default function ServicesPage() {
  const sections = [
    {
      id: 1,
      title: "01 Construction & General Trading",
      description: "Turn-key construction contracts alongside import, export and supply of building materials across Kurdistan and Iraq.",
      imageUrl: "/case/Trading.webp",
      reverse: false,
    },
    {
      id: 2,
      title: "02 Firefighting",
      description: "Fire protection systems, equipment supply and safety solutions for industrial, commercial and public facilities.",
      imageUrl: "/case/Firefighting.webp",
      reverse: true,
    },
    {
      id: 3,
      title: "03 Robot Trading",
      description: "Trading, integration and supply of robotics and automation systems for modern industrial operations.",
      imageUrl: "/case/Robot.webp",
      reverse: false,
    },
    {
      id: 4,
      title: "04 Cooperations",
      description: "Strategic cooperations and joint ventures with foreign and local partners to deliver large-scale infrastructure.",
      imageUrl: "/case/Cooperations.jpeg",
      reverse: true,
    },
  ];

  const sectionRefs = sections.map(() => useRef(null));

  const scrollYProgress = sections.map((_, index) => {
    return useScroll({
      target: sectionRefs[index],
      offset: ["start end", "center start"],
    }).scrollYProgress;
  });

  const opacityContents = scrollYProgress.map((progress) =>
    useTransform(progress, [0, 0.7], [0, 1])
  );

  const clipProgresses = scrollYProgress.map((progress) =>
    useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  );

  const translateContents = scrollYProgress.map((progress) =>
    useTransform(progress, [0, 1], [-50, 0])
  );

  return (
    <div className="tw-bg-[#f6f8fb] tw-min-h-screen">
      <style>{`
        [data-sublime-header]{position:absolute;inset:clamp(24px,4.5cqw,48px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px; z-index:50;}
        [data-sublime-logo]{font-size:19px;font-weight:600;letter-spacing:-.065em;color:#112d6b;}
        [data-sublime-category]{font-size:12px;line-height:1.5;color:rgba(17,45,107,0.7);}
        [data-sublime-eyebrow]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 32px);margin:0;text-align:center;font-size:13px;font-weight:400;line-height:1.5;letter-spacing:.005em;color:rgba(17,45,107,0.7);}
        [data-sublime-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 32px) 24px auto;margin:0 auto;max-width:90%;text-align:center;font-size:clamp(12px, 3.5vw, 16px);font-weight:400;line-height:1.5;color:#112d6b;}
        [data-sublime-scroll]{position:absolute;inset:auto 24px 7%;text-align:center;color:rgba(17,45,107,0.6);font-size:11px;letter-spacing:.01em;}
      `}</style>
      
      <GlyphPortal 
        word="SERVICES" 
        scrollLength={2.4} 
        interactive={true} 
        annotations={false} 
        enterLabel="Step inside"
        front={
          <>
            <p data-sublime-eyebrow>Ten practices under one roof</p>
            <p data-sublime-support>Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships</p>
            <span data-sublime-scroll>Scroll for a closer look ↓</span>
          </>
        }
      >
        <div className="tw-py-24">
          <div className="tw-px-6 md:tw-px-12 lg:tw-px-24 tw-max-w-5xl tw-mx-auto tw-mb-32 tw-text-center tw-flex tw-flex-col tw-items-center">
            <h2 className="tw-text-4xl md:tw-text-6xl tw-text-white tw-font-[800] tw-leading-tight tw-mb-8">
              Ten practices under one roof
            </h2>
            <p className="tw-text-[rgba(255,255,255,0.7)] tw-text-xl md:tw-text-2xl tw-leading-relaxed tw-font-medium">
              Daban Holding operates through specialised divisions — Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships — each with its own equipment, engineers and playbook.
            </p>
          </div>

          <div className="tw-flex tw-flex-col tw-px-6 md:tw-px-12 lg:tw-px-24">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={sectionRefs[index]}
                className={`tw-h-[80vh] tw-flex tw-items-center tw-justify-center tw-gap-12 md:tw-gap-32 ${
                  section.reverse ? "md:tw-flex-row-reverse" : "md:tw-flex-row"
                } tw-flex-col`}
              >
                <motion.div style={{ y: translateContents[index] }} className="tw-flex-1 tw-max-w-xl">
                  <div className="tw-text-3xl md:tw-text-5xl tw-text-white tw-font-[800] tw-leading-tight">
                    {section.title}
                  </div>
                  <motion.p
                    style={{ y: translateContents[index] }}
                    className="tw-text-[rgba(255,255,255,0.7)] tw-text-lg md:tw-text-xl tw-font-medium tw-leading-relaxed tw-mt-8"
                  >
                    {section.description}
                  </motion.p>
                </motion.div>
                <motion.div
                  style={{
                    opacity: opacityContents[index],
                    clipPath: clipProgresses[index],
                  }}
                  className="tw-relative tw-flex-1 tw-flex tw-justify-center"
                >
                  <img
                    src={section.imageUrl}
                    className="tw-w-full tw-max-w-[550px] tw-aspect-square tw-object-cover tw-rounded-[12px] tw-shadow-2xl"
                    alt={section.title}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </GlyphPortal>
    </div>
  );
}
