import React, { useEffect, useRef } from "react";
import { useGallery } from "@wethegit/react-gallery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function ScrollController({ thumbOrder }) {
  const { activeIndex, goToIndex } = useGallery();
  const lastIndex = useRef(activeIndex);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".tm-section",
      start: "top top",
      end: "+=300%",
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // There are 3 slides, so segments are: 0 - 0.33, 0.33 - 0.66, 0.66 - 1.0
        let targetIndex = Math.floor(progress * 3);
        if (targetIndex >= 3) targetIndex = 2; // Clamp
        
        // Wait, the index of the slides might not be 0,1,2 in order because 
        // the gallery is a deck-rotation. 
        // If we want linear progression through the items array:
        if (targetIndex !== lastIndex.current) {
          lastIndex.current = targetIndex;
          goToIndex(targetIndex);
        }
      }
    });
    
    return () => trigger.kill();
  }, [goToIndex]);

  return null;
}
