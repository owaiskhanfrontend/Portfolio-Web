import { useState } from "react";
import figmaicon from "../../assets/skill assets/figmablender.webp"
import reactblender from "../../assets/skill assets/reactblender.webp"
import JSblender from "../../assets/skill assets/JSblender.webp"
import blendericon from "../../assets/skill assets/blender.webp"
import githublender from "../../assets/skill assets/githublender.webp"
import tailwindblender from "../../assets/skill assets/tailwindblender.webp"
import htmlblender from "../../assets/skill assets/htmlblender.webp"
import cssblender from "../../assets/skill assets/cssblender.webp"
import contextapiblender from "../../assets/skill assets/contextapiblender.webp"
import stateblender from "../../assets/skill assets/stateblender.webp"

function Skill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Skilldata = [
    { id: 1, img: figmaicon, text: "Figma To Code", color: "#F24E1E" },
    { id: 2, img: tailwindblender, text: "Tailwind CSS", color: "#61DAFB" },
    { id: 3, img: JSblender, text: "JavaScript", color: "#F7DF1E" },
    { id: 4, img: reactblender, text: "React.js", color: "#61DAFB" },
    { id: 6, img: blendericon, text: "Blender 3D", color: "#F5792A" },
    { id: 7, img: githublender, text: "Git & GitHub", color: "#FFFFFF" },
    { id: 8, img: contextapiblender, text: "Context Api", color: "#6eeb2c" },
    { id: 9, img: htmlblender, text: "HTML5", color: "#E34F26" },
    { id: 10, img: cssblender, text: "CSS3", color: "#33a9dc" },
    { id: 11, img: stateblender, text: "State", color: "#953FFF" }
  ];

  return (
    <div className="w-full bg-black">
      <style>{`
        @keyframes spin-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-border {
          animation: spin-border 7.5s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-360 h-auto px-fluid-x mx-auto py-10 md:py-15">
        <div className="w-full h-auto flex flex-col gap-10">
          
          <div className="w-full h-auto flex gap-8">
            <div className="w-full h-auto flex flex-col items-center text-center gap-2">
              <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
                I'm currently looking to join a <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">cross-functional team</span>.
              </h2>
              <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins items-center justify-center max-w-2xl">
                that values improving people's lives through accessible designs with programming
              </p>
            </div>
          </div>

          <div className="w-full h-auto grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            {Skilldata.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group w-full flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-[#080808]"
                  style={{
                    boxShadow: isHovered ? `0 0 25px ${item.color}20` : "0 4px 20px rgba(0,0,0,0.5)"
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none p-[1px] z-0">
                    <div className="absolute inset-[-100%] animate-spin-border flex items-center justify-center">
                      <div 
                        className="w-[300%] h-[300%]"
                        style={{
                          background: `conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.03) 0deg, rgba(255,255,255,0.03) 300deg, ${item.color} 360deg)`
                        }}
                      />
                    </div>
                  </div>
                  <div 
                    className="absolute inset-[1px] rounded-[15px] z-0 transition-colors duration-300"
                    style={{
                      backgroundColor: isHovered ? "#0c0c0c" : "#080808"
                    }}
                  />

                  <div className="relative z-10 w-full flex flex-col items-center gap-2">
              
                    <div 
                      className="w-18 h-18 rounded-full flex items-center justify-center p-2.5 backdrop-blur-md transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${isHovered ? item.color : "rgba(255, 255, 255, 0.1)"}`,
                        boxShadow: isHovered 
                          ? `0 0 15px ${item.color}80, inset 0 0 8px ${item.color}40` 
                          : "0 0 8px rgba(255, 255, 255, 0.04)"
                      }}
                    >
                      <img src={item.img} alt="skill-icon" className="w-full h-full object-contain filter drop-shadow-md" />
                    </div>
                    <span 
                      className="text-xs md:text-sm font-poppins text-center font-medium transition-colors duration-300"
                      style={{ color: isHovered ? item.color : "rgba(255, 255, 255, 0.8)" }}
                    >
                      {item.text}
                    </span>
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

export default Skill;