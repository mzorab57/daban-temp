import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollChoreography({
  className = "",
  images,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    mass: 1.2,
    restDelta: 0.001,
  });

  // Default positions relative to center
  const xLeft = "-20vw";
  const xRight = "20vw";
  const yTop = "-12vh";
  const yBottom = "18vh"; // shifted bottom down a bit to make room for text

  // Top Left
  const tlX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const tlY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yBottom, yBottom, "0vh", "0vh"]);

  // Bottom Right
  const brX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const brY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yTop, yTop, "0vh", "0vh"]);

  // Bottom Left
  const blX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const blY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yBottom, yBottom, "0vh", "0vh"]);

  // Top Right (Hero)
  const trX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const trY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yTop, yTop, "0vh", "0vh"]);

  const heroWidth = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["36vw", "36vw", "100vw", "100vw"]);
  const heroHeight = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["24vh", "24vh", "100vh", "100vh"]);

  const underImagesOpacity = useTransform(smoothProgress, [0.75, 0.85], [1, 0]);
  
  // Fade out the text when the hero expands
  const textOpacity = useTransform(smoothProgress, [0.6, 0.7], [1, 0]);
  const textY = useTransform(smoothProgress, [0.6, 0.7], ["0vh", "-5vh"]);

  const baseImageClasses =
    "tw-w-[36vw] tw-h-[24vh] tw-overflow-hidden tw-bg-white tw-rounded-lg tw-shadow-[0_10px_40px_rgba(0,0,0,0.08)] tw-will-change-transform";

  return (
    <div ref={containerRef} className={`tw-relative tw-h-[300vh] tw-w-full tw-bg-[#f6f8fb] ${className}`}>
      <div className="tw-sticky tw-top-0 tw-h-screen tw-w-full tw-overflow-hidden">
        
        {/* Title Text Section - Now animates away and sits at the top so it doesn't mix */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="tw-absolute tw-top-[8vh] tw-left-0 tw-right-0 tw-text-center tw-z-50 tw-px-6 tw-pointer-events-none"
        >
          <h2 className="tw-text-deep-blue tw-font-black tw-text-4xl md:tw-text-6xl tw-mb-4 tw-tracking-tight tw-uppercase">
            Our Brands
          </h2>
          <p className="tw-text-dark-navy tw-text-lg md:tw-text-xl tw-max-w-2xl tw-mx-auto tw-font-medium tw-opacity-80">
            Daban Holding proudly represents and operates these distinguished global brands, 
            delivering excellence and innovation across multiple sectors.
          </p>
        </motion.div>

        <div className="tw-absolute tw-inset-0">
          
          {/* Centering Wrapper for Top Left Image */}
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-10" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              style={{ x: tlX, y: tlY, opacity: underImagesOpacity }}
              className={`${baseImageClasses}`}
            >
              <img src={images.topLeft} alt="SANY Group" className="tw-h-full tw-w-full tw-object-contain tw-p-8" />
            </motion.div>
          </div>

          {/* Centering Wrapper for Bottom Right Image */}
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-20" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              style={{ x: brX, y: brY, opacity: underImagesOpacity }}
              className={`${baseImageClasses}`}
            >
              <img src={images.bottomRight} alt="Charlatte" className="tw-h-full tw-w-full tw-object-contain tw-p-8" />
            </motion.div>
          </div>

          {/* Centering Wrapper for Bottom Left Image */}
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-30" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              style={{ x: blX, y: blY, opacity: underImagesOpacity }}
              className={`${baseImageClasses}`}
            >
              <img src={images.bottomLeft} alt="ZS Drone" className="tw-h-full tw-w-full tw-object-contain tw-p-8" />
            </motion.div>
          </div>

          {/* Centering Wrapper for Top Right Image (Hero) */}
          <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-40" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              style={{
                x: trX,
                y: trY,
                width: heroWidth,
                height: heroHeight,
              }}
              className={`${baseImageClasses} tw-origin-center tw-bg-black`}
            >
              <img src={images.topRight} alt="DD Drone" className="tw-h-full tw-w-full tw-object-contain md:tw-object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ScrollChoreography;
