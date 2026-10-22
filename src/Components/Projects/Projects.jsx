import { useState, useEffect, useRef } from "react";
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
import githublender from "../../assets/skill assets/githublender.webp";
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
    <div className="w-full h-auto bg-black overflow-hidden">
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

          <div className="w-full flex flex-col gap-4 md:gap-32 mt-6">
            {projectsList.map((project, index) => {
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={project.id}
                  className={`relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="w-full lg:w-5/12 flex flex-col z-20">
                    <span className="text-[#6eeb2c] font-clash font-semibold text-display-4 tracking-widest uppercase mb-1">
                      {project.tagline} {index + 1}
                    </span>
                    <h3 className="text-display-6 md:text-display-8 font-bold text-white font-clash mb-6">
                      {project.title}
                    </h3>

                    <div className={`bg-purple-400/10 border border-white/8 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/12 hover:bg-white/6 p-6 md:p-8 shadow-2xl z-30 flex flex-col gap-4 ${isEven ? "xl:-ml-16" : "xl:-mr-16"}`}>
                      
                      <div className="flex flex-col gap-3">
                        <div className="font-poppins text-display-4 text-white font-medium">Tech Stack Used</div>
                        
                        <div className="w-full flex flex-wrap items-center gap-3">
                          {project.techStack.map((tech, idx) => {
                            const globalIdx = `${index}-${idx}`;
                            const isHovered = hoveredTechIndex === globalIdx;
                            return (
                              <div
                                key={idx}
                                onMouseEnter={() => setHoveredTechIndex(globalIdx)}
                                onMouseLeave={() => setHoveredTechIndex(null)}
                                title={tech.name}
                                className="relative group w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center p-2 cursor-pointer transition-all duration-300"
                                style={{
                                  backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                                  border: `1px solid ${isHovered ? tech.color : "rgba(255, 255, 255, 0.12)"}`,
                                  boxShadow: isHovered 
                                    ? `0 0 15px ${tech.color}80, inset 0 0 8px ${tech.color}40` 
                                    : "0 0 8px rgba(255, 255, 255, 0.04)",
                                  transform: isHovered ? "scale(1.15)" : "scale(1)"
                                }}
                              >
                                <img 
                                  src={tech.img} 
                                  alt={tech.name} 
                                  className="w-full h-full object-contain filter drop-shadow-md" 
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <p className="text-gray-300 text-display-2 md:text-display-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-6 pl-2">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-white hover:text-[#6eeb2c] transition-colors flex items-center gap-2 font-medium text-sm group"
                      >
                        <span>Live Preview</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-medium text-sm group"
                      >
                        <span>GitHub Repo</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-0.5 transition-transform group-hover:scale-110">
                          <img src={githublender} alt="github-icon" className="w-full h-full object-contain" />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3a3845]/100 to-[#3a3845]/100 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;