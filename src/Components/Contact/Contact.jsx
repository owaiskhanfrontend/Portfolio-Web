import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import human_hand from "../../assets/contact assets/hand_left.webp";
import robo_hand from "../../assets/contact assets/robo_hand.webp";

function Contact() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const leftXRange = isMobile ? ["-35vw", "0vw"] : ["-50vw", "0vw"];
  const rightXRange = isMobile ? ["35vw", "0vw"] : ["50vw", "0vw"];

  const leftHandX = useTransform(scrollYProgress, [0, 1], leftXRange);
  const rightHandX = useTransform(scrollYProgress, [0, 1], rightXRange);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-black overflow-x-hidden relative flex flex-col justify-start py-12 md:py-20"
    >
      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto">
        <h2 className="w-full text-center font-poppins text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-wide z-10">
          One Journey. Every Skill That Matters.
        </h2>
      </div>

      <div className="w-full relative h-[280px] sm:h-[380px] md:h-[550px] lg:h-[650px] flex items-center justify-center my-6 md:my-10 pointer-events-none">
        
        <motion.div
          style={{ x: leftHandX }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[70vw] sm:w-[60vw] md:w-[46vw] max-w-[800px] flex justify-end z-20"
        >
          <img
            src={human_hand}
            alt="Human Hand"
            className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          />
        </motion.div>
        <motion.div
          style={{ x: rightHandX }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[70vw] sm:w-[60vw] md:w-[46vw] max-w-[800px] flex justify-start z-20"
        >
          <img
            src={robo_hand}
            alt="Robo Hand"
            className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          />
        </motion.div>

        <motion.div
          style={{ opacity: scrollYProgress }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 md:w-52 md:h-52 bg-purple-600/40 blur-3xl rounded-full z-10"
        />
      </div>

      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto flex flex-col gap-10 z-30">
      </div>
    </div>
  );
}

export default Contact;