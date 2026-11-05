import githublender from "../../assets/skill assets/githublender.webp";

function StickyProjectCard({ project, index, hoveredTechIndex, setHoveredTechIndex }) {
  const isEven = index % 2 === 1;
  const stickyOffsets = ["top-20", "top-32", "top-44"];

  return (
    <div 
      className={`sticky ${stickyOffsets[index] || "top-44"} w-full transition-all duration-300 `}
      style={{ zIndex: index + 1 }}
    >
      <div className={`w-full bg-[#0a0a0a] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 md:p-12 shadow-[0_-30px_60px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${isEven ? "lg:flex-row-reverse" : ""}`}>
        
        <div className="w-full lg:w-5/12 flex flex-col z-20">
          <span className="text-[#6eeb2c] font-clash font-semibold text-display-4 tracking-widest uppercase mb-1">
            {project.tagline} {index + 1}
          </span>
          <h3 className="text-display-6 md:text-display-8 font-bold text-white font-clash mb-6">
            {project.title}
          </h3>

          <div className="bg-purple-400/10 border border-white/8 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-6 md:p-8 flex flex-col gap-4">
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

            <p className="font-poppins text-gray-300 text-display-2 md:text-display-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-6 pl-2">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="font-poppins text-white hover:text-[#6eeb2c] transition-colors flex items-center gap-2 font-medium text-display-2 group"
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
              className="font-poppins text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-medium text-display-2 group"
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
          <div className="relative border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full bg-black">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition duration-500 ease-out"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default StickyProjectCard;