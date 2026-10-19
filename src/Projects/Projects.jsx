import { useState, useEffect, useRef } from "react";
import foldericon from "../assets/Projects assets/folderblender3.webp";
import project1 from "../assets/Projects assets/weather dashboard.png";
import project2 from "../assets/Projects assets/moon e commerce.png";
import project3 from "../assets/Projects assets/portfolio web.png";

function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const scrollRange = windowHeight * 0.5;
      const currentScroll = windowHeight - elementTop - windowHeight / 3;

      let progress = currentScroll / scrollRange;
      progress = Math.max(0, Math.min(1, progress)); 
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const interpolate = (start, end) => start + (end - start) * scrollProgress;


  const leftX = isMobile ? -55 : -110;
  const rightX = isMobile ? 55 : 110;
  const sideY = isMobile ? -30 : -45;
  const centerY = isMobile ? -50 : -75;
  const sideRotate = isMobile ? 8 : 14;

  return (
    <div className="w-full h-[1000px] md:h-[1200px] bg-black overflow-hidden">
      <div className="w-full max-w-360 h-auto px-fluid-x mx-auto py-12 md:py-20">
        <div className="w-full h-auto flex flex-col gap-12">
          
          <div className="w-full h-auto flex flex-col items-center text-center gap-2">
            <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
              Real <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Projects</span>. Real <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Complexity</span>.
            </h2>
            <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
              Real Proof of <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Skill</span>.
            </h2>
          </div>

          <div 
            ref={containerRef} 
            className="relative flex items-center justify-center h-auto md:h-[380px] mt-12 md:mt-15"
          >
            
            <img 
              alt="Weather Dashboard" 
              draggable="false" 
              className="absolute w-[95px] md:w-[180px] object-contain rounded-lg shadow-2xl select-none pointer-events-none transition-transform duration-75 ease-out" 
              src={project1} 
              style={{
                zIndex: 1,
                transformOrigin: "center bottom",
                transform: `translateX(${interpolate(0, leftX)}px) translateY(${interpolate(0, sideY)}px) rotate(${interpolate(0, -sideRotate)}deg) scale(${interpolate(0.7, 1)})`,
                opacity: scrollProgress
              }} 
            />

            <img 
              alt="Portfolio Web" 
              draggable="false" 
              className="absolute w-[95px] md:w-[180px] object-contain rounded-lg shadow-2xl select-none pointer-events-none transition-transform duration-75 ease-out" 
              src={project3} 
              style={{
                zIndex: 2,
                transformOrigin: "center bottom",
                transform: `translateX(0px) translateY(${interpolate(0, centerY)}px) rotate(0deg) scale(${interpolate(0.7, 1)})`,
                opacity: scrollProgress
              }} 
            />

            <img 
              alt="Moon E-Commerce" 
              draggable="false" 
              className="absolute w-[95px] md:w-[180px] object-contain rounded-lg shadow-2xl select-none pointer-events-none transition-transform duration-75 ease-out" 
              src={project2} 
              style={{
                zIndex: 3,
                transformOrigin: "center bottom",
                transform: `translateX(${interpolate(0, rightX)}px) translateY(${interpolate(0, sideY)}px) rotate(${interpolate(0, sideRotate)}deg) scale(${interpolate(0.7, 1)})`,
                opacity: scrollProgress
              }} 
            />

            <img 
              alt="Projects Folder" 
              draggable="false" 
              className="relative w-[190px] md:w-[360px] object-contain select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] z-10" 
              src={foldericon} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;