import { useState, useEffect, useRef } from "react";
import foldericon from "../assets/Projects assets/folderblender3.webp";
import project1 from "../assets/Projects assets/weather dashboard.png";
import project2 from "../assets/Projects assets/moon e commerce.png";
import project3 from "../assets/Projects assets/portfolio web.png";
import pcui from "../assets/Projects assets/pc ui card-1.png";

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

  const projectsList = [
    {
      id: 1,
      title: "Moon E-Commerce",
      tagline: "Featured Project",
      description:
        "Full-featured React 19 e-commerce web application featuring custom 3D visual assets rendered in Blender, state management via Context API, and integration with dynamic DummyJSON APIs.",
      tech: ["React 19", "Tailwind CSS v4", "Blender 3D", "Context API"],
      image: pcui,
      liveUrl: "https://owaiskhan-moon-e-commerce.netlify.app",
      githubUrl: "https://github.com/owaiskhanfrontend/Moon-E-Commerce",
    },
  ];

  return (
    <div className="w-full h-auto bg-black overflow-hidden pb-24">
      <div className="w-full max-w-7xl h-auto px-4 md:px-8 mx-auto py-12 md:py-20">
        <div className="w-full h-auto flex flex-col gap-12">
          
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
            className="relative flex items-center justify-center h-[280px] md:h-[380px] mt-8 md:mt-12"
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

          <div className="w-full flex flex-col gap-24 md:gap-32 mt-6">
            {projectsList.map((project) => (
              <div 
                key={project.id}
                className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
              >
                <div className="w-full lg:w-5/12 flex flex-col z-20">
                  <span className="text-[#6eeb2c] font-mono text-sm tracking-widest uppercase mb-1">
                    {project.tagline}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-clash mb-6">
                    {project.title}
                  </h3>

                  <div className="bg-[#111115]/90 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl z-30 lg:-mr-12 xl:-mr-16">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((item, idx) => (
                        <span 
                          key={idx}
                          className="bg-white/5 border border-white/10 text-xs text-[#6eeb2c] px-3 py-1 rounded-full font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6 pl-2">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-[#6eeb2c] transition-colors flex items-center gap-2 font-medium text-sm"
                    >
                      <span>Live Preview</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium text-sm"
                    >
                      <span>GitHub Repo</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-7/12 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6eeb2c]/20 to-purple-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-[#18181f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;