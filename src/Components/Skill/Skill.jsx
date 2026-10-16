import { useState } from "react";
import figmaicon from "../../assets/skill assets/figma icon.svg"
import reactjsicon from "../../assets/skill assets/react.js icon.svg"
import javascripticon from "../../assets/skill assets/javascript icon.svg"
import apiicon from "../../assets/skill assets/web-api-icon.svg"
import blendericon from "../../assets/skill assets/blender-icon.svg"
import githubicon from "../../assets/skill assets/github icon.svg"
import tailwindcssicon from "../../assets/skill assets/tailwind-css icon.svg"
import html5icon from "../../assets/skill assets/html-5-icon.svg"

function Skill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Skilldata = [
    { id: 1, img: figmaicon, text: "Figma To Code", color: "#F24E1E" },
    { id: 2, img: tailwindcssicon, text: "Tailwind CSS", color: "#61DAFB" },
    { id: 3, img: javascripticon, text: "JavaScript", color: "#F7DF1E" },
    { id: 4, img: reactjsicon, text: "React.js", color: "#61DAFB" },
    { id: 5, img: apiicon, text: "Context api", color: "#339933" },
    { id: 6, img: blendericon, text: "Blender 3D", color: "#F5792A" },
    { id: 7, img: githubicon, text: "Git & GitHub", color: "#FFFFFF" },
    { id: 8, img: html5icon, text: "HTML5", color: "#E34F26" },
    { id: 8, img: figmaicon, text: "CSS3", color: "#E34F26" }
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-360 h-auto px-fluid-x mx-auto py-10 md:py-15">
        <div className="w-full h-auto flex flex-col gap-10">
          
          <div className="w-full h-auto flex gap-8">
            <div className="w-full h-auto flex flex-col items-center text-center gap-2">
              <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
                I'm currently looking to join a <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">cross-functional team</span>
              </h2>
              <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins items-center justify-center max-w-2xl">
                that values improving people's lives through accessible designs with programming
              </p>
            </div>
          </div>

          <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
            {Skilldata.map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: hoveredIndex === index ? "rgba(255, 255, 255, 0.06)" : "transparent",
                  borderColor: hoveredIndex === index ? item.color : "transparent",
                  borderWidth: "1px",
                  boxShadow: hoveredIndex === index ? `0 0 15px ${item.color}40` : "none"
                }}
              >
            
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2.5 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <img src={item.img} alt="skill-icon" className="w-full h-full object-contain" />
                </div>
            
                <span 
                  className="text-white text-xs md:text-sm font-poppins text-center font-medium transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? item.color : "rgba(255, 255, 255, 0.8)" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full min-h-[350px] flex items-center justify-center border border-white/10 rounded-2xl bg-white/2 backdrop-blur-md mt-6">
            <span className="text-white/40 font-poppins text-sm uppercase tracking-widest">
            
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;