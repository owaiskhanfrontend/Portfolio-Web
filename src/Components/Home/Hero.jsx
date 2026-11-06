import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import isometriclayer from "../../assets/Home assets/hero_bg.webp";
import rockscene from "../../assets/Home assets/rockscene.webp";


function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[1440px] min-h-screen px-fluid-x mx-auto pb-20">
      
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none opacity-40 z-0">
        <img 
          src={isometriclayer} 
          alt="Isometric Background" 
          className="w-full h-full object-contain md:object-cover mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-6 pt-24 md:pt-32">
        
        <div className="w-full flex flex-col items-center gap-3 text-center">
          <span className="text-display-4 font-poppins font-medium text-white/70 tracking-wide">
            Owais Khan — Creative Frontend Engineer
          </span>
          <h1 className="text-display-8 md:text-display-10 lg:text-[4.5rem] leading-[1.1] font-clash font-bold text-white max-w-5xl">
            Architecting{" "}
            <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6,0_0_30px_#6eeb2c4d]">
              Immersive UIs
            </span>{" "}
            & Data-Driven Web Applications.
          </h1>
        </div>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center font-poppins font-normal text-white/60 leading-relaxed">
          Fusing production-grade React architecture, robust state management, and seamless REST API integrations with interactive 3D assets to build web apps that are as powerful as they are visually striking.
        </p>
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative pt-5 md:pt-7 px-4">
          <motion.div 
            style={{ scale: sceneScale }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full flex items-center justify-center pointer-events-none"
          >
            <img 
              src={rockscene} 
              alt="3D Rock Scene Portal" 
              className="w-full h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;