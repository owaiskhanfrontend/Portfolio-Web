import { useState, useEffect, useRef } from "react";
import StickyProjectCard from "./StickyProjectCard";
import foldericon from "../../assets/Projects assets/folderblender3.webp";
import project1 from "../../assets/Projects assets/weather dashboard.png";
import project2 from "../../assets/Projects assets/moon e commerce.png";
import project3 from "../../assets/Projects assets/portfolio web.png";

import pcui from "../../assets/Projects assets/pc ui card-1.png";
import pcui2 from "../../assets/Projects assets/pc ui card-2.png";
import pcui3 from "../../assets/Projects assets/pc ui card-3.png";

import figmaicon from "../../assets/skill assets/figmablender.webp";
import reactblender from "../../assets/skill assets/reactblender.webp";
import JSblender from "../../assets/skill assets/JSblender.webp";
import blendericon from "../../assets/skill assets/blender.webp";
import tailwindblender from "../../assets/skill assets/tailwindblender.webp";
import htmlblender from "../../assets/skill assets/htmlblender.webp";
import cssblender from "../../assets/skill assets/cssblender.webp";
import contextapiblender from "../../assets/skill assets/contextapiblender.webp";
import stateblender from "../../assets/skill assets/stateblender.webp";

function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredTechIndex, setHoveredTechIndex] = useState(null);
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

  const projectsList = [
    {
      id: 1,
      title: "Moon E-Commerce",
      tagline: "Featured Project",
      description:
        "Full-featured React 19 e-commerce web application featuring custom 3D visual assets rendered in Blender, state management via Context API, and integration with dynamic DummyJSON APIs.",
      techStack: [
        { name: "Figma", img: figmaicon, color: "#F24E1E" },
        { name: "React 19", img: reactblender, color: "#61DAFB" },
        { name: "JavaScript", img: JSblender, color: "#F7DF1E" },
        { name: "Tailwind CSS", img: tailwindblender, color: "#61DAFB" },
        { name: "Blender 3D", img: blendericon, color: "#F5792A" },
        { name: "Context API", img: contextapiblender, color: "#6eeb2c" },
        { name: "State", img: stateblender, color: "#953FFF" },
      ],
      image: pcui,
      liveUrl: "https://owaiskhan-moon-e-commerce.netlify.app",
      githubUrl: "https://github.com/owaiskhanfrontend/Moon-E-Commerce",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      tagline: "Featured Project",
      description:
        "Zero-framework responsive weather dashboard application built using vanilla JavaScript ES6 modules, Open-Meteo API, and browser Geolocation API for real-time climate tracking.",
      techStack: [
        { name: "JavaScript", img: JSblender, color: "#F7DF1E" },
        { name: "HTML5", img: htmlblender, color: "#E34F26" },
        { name: "CSS3", img: cssblender, color: "#33a9dc" },
        { name: "Figma", img: figmaicon, color: "#F24E1E" },
      ],
      image: pcui2,
      liveUrl: "https://owaiskhan-weather-dashboard.netlify.app",
      githubUrl: "https://github.com/owaiskhanfrontend/Weather-Dashboard",
    },
    {
      id: 3,
      title: "Portfolio Web",
      tagline: "Featured Project",
      description:
        "High-performance personal developer portfolio architected with React, Tailwind CSS v4, custom 3D Blender assets, and fluid interactive scroll animations.",
      techStack: [
        { name: "React 19", img: reactblender, color: "#61DAFB" },
        { name: "Tailwind CSS", img: tailwindblender, color: "#61DAFB" },
        { name: "Blender 3D", img: blendericon, color: "#F5792A" },
        { name: "Figma", img: figmaicon, color: "#F24E1E" },
      ],
      image: pcui3,
      liveUrl: "https://owaiskhanfrontend.netlify.app",
      githubUrl: "https://github.com/owaiskhanfrontend/Portfolio",
    },
  ];

  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto py-12 md:py-20">
        <div className="w-full h-auto flex flex-col gap-6 md:gap-12">
          
          <div className="w-full h-auto flex flex-col items-center text-center gap-2">
            <h2 className="text-3xl md:text-5xl font-medium text-white font-clash">
              Real <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Projects</span>. Real <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Complexity</span>.
            </h2>
            <h2 className="text-3xl md:text-5xl font-medium text-white font-clash">
              Real Proof of <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Skill</span>.
            </h2>
          </div>

          

          <div 
            ref={containerRef} 
            className="relative flex items-center justify-center h-[217px] md:h-[380px] mt-8 md:mt-12"
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

          <div className="w-full flex flex-col relative mt-12 space-y-12">
            {projectsList.map((project, index) => (
              <StickyProjectCard 
                key={project.id}
                project={project}
                index={index}
                hoveredTechIndex={hoveredTechIndex}
                setHoveredTechIndex={setHoveredTechIndex}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;