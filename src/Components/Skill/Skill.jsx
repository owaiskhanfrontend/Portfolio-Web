import { useState } from "react";
import figmaicon from "../../assets/skill assets/figmablender.webp"
import reactblender from "../../assets/skill assets/reactblender.webp"
import JSblender from "../../assets/skill assets/JSblender.webp"
import apiicon from "../../assets/skill assets/web-api-icon.svg"
import blendericon from "../../assets/skill assets/blender.webp"
import githublender from "../../assets/skill assets/githublender.webp"
import tailwindblender from "../../assets/skill assets/tailwindblender.webp"
import htmlblender from "../../assets/skill assets/htmlblender.webp"
import cssblender from "../../assets/skill assets/cssblender.webp"

function Skill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Skilldata = [
    { id: 1, img: figmaicon, text: "Figma To Code", color: "#F24E1E" },
    { id: 2, img: tailwindblender, text: "Tailwind CSS", color: "#61DAFB" },
    { id: 3, img: JSblender, text: "JavaScript", color: "#F7DF1E" },
    { id: 4, img: reactblender, text: "React.js", color: "#61DAFB" },
    { id: 5, img: apiicon, text: "Context api", color: "#339933" },
    { id: 6, img: blendericon, text: "Blender 3D", color: "#F5792A" },
    { id: 7, img: githublender, text: "Git & GitHub", color: "#FFFFFF" },
    { id: 8, img: htmlblender, text: "HTML5", color: "#E34F26" },
    { id: 9, img: cssblender, text: "CSS3", color: "#33a9dc" }
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
                <div className="w-18 h-18 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2.5 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
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

        </div>
      </div>
    </div>
  );
}

export default Skill;