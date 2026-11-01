import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import human_hand from "../../assets/contact assets/hand_left.webp";
import robo_hand from "../../assets/contact assets/robo_hand.webp";

function Contact() {
  const containerRef = useRef(null);
  const [screenTier, setScreenTier] = useState("desktop");

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenTier("mobile");
      } else if (width < 1024) {
        setScreenTier("tablet");
      } else {
        setScreenTier("desktop");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const getXRanges = () => {
    if (screenTier === "mobile") {
      return {
        left: ["-48vw", "-0.8vw"],
        right: ["48vw", "0.8vw"],
      };
    }
    if (screenTier === "tablet") {
      return {
        left: ["-52vw", "-0.5vw"],
        right: ["52vw", "0.5vw"],
      };
    }
    return {
      left: ["-54vw", "0vw"],
      right: ["54vw", "0vw"],
    };
  };

  const { left, right } = getXRanges();

  const leftHandX = useTransform(scrollYProgress, [0, 1], left);
  const rightHandX = useTransform(scrollYProgress, [0, 1], right);

  const glowScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.75]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[1300px] bg-black overflow-x-hidden relative flex flex-col justify-start py-12 md:py-20"
    >
      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto">
        <h2 className="w-full text-center font-poppins text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-wide z-10">
          One Journey. Every Skill That Matters.
        </h2>
      </div>

      <div className="w-full relative h-[250px] sm:h-[380px] md:h-[550px] lg:h-[650px] flex items-center justify-center my-6 md:my-10 pointer-events-none">
        
        <motion.div
          style={{ x: leftHandX }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[55vw] sm:w-[60vw] md:w-[52vw] max-w-[880px] flex justify-end z-20"
        >
          <img
            src={human_hand}
            alt="Human Hand"
            className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          />
        </motion.div>

        <motion.div
          style={{ x: rightHandX }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] sm:w-[60vw] md:w-[52vw] max-w-[880px] flex justify-start z-20"
        >
          <img
            src={robo_hand}
            alt="Robo Hand"
            className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          />
        </motion.div>

  
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
        >
 
          <div className="absolute w-20 h-20 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-purple-500/40 rounded-full blur-2xl" />
          <div className="w-36 h-36 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-600/25 blur-[70px] rounded-full" />
        </motion.div>
      </div>

      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto flex flex-col gap-10 z-30">
      </div>
    </div>
  );
}

export default Contact;