import { useState } from "react";
import isometriclayer from "../../assets/Home assets/hero_bg.webp"
import logo from "../../assets/Home assets/Logo.svg"
import vectorline from "../../assets/Home assets/Vector 1.svg"
import puzzleicon from "../../assets/Home assets/puzzleicon.svg"
import mainpuzzle from "../../assets//Home assets/main.webp"
import Homejsx from "../../assets//Home assets/Homejsx.webp"
import aboutjsx from "../../assets//Home assets/aboutjsx.webp"

function Hero() {

  const [activeTab, setActiveTab] = useState("MAIN");

  const getActiveImage = () => {
    switch (activeTab) {
      case "HOME": return Homejsx;
      case "STORY": return aboutjsx;
    
      default: return mainpuzzle;
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] min-h-[calc(100vh-200px)] px-fluid-x mx-auto pb-10 md:pb-15">
      
    
      <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none opacity-50 z-0">
        <img 
          src={isometriclayer} 
          alt="Isometric Background" 
          className="w-full h-full object-contain md:object-cover mix-blend-screen" 
        />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-7">
        
        <div className="w-full flex flex-col items-center gap-4">
          <span className="text-display-4 font-poppins font-medium text-white/70 tracking-wide text-center">
            Owais Khan — Creative Frontend Engineer
          </span>
          <h1 className="text-display-8 md:text-display-10 lg:text-[4.5rem] leading-[1.1] font-clash font-bold text-white text-center max-w-5xl">
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
            
        <div className="w-full h-auto rounded max-w-277.5 grid lg:grid-cols-[258px_1fr] gap-10 text-white mx-auto">
          
    
          <div className="w-full h-full flex flex-col gap-2 px-6 py-6 bg-white/4 border border-white/8 rounded backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/12 hover:bg-white/6">
            <div className="w-full h-12.5 flex items-center justify-between">
              <div className="w-full max-w-8.5 h-8.5">
                  <img src={logo} alt="logo" />
              </div>
                <span className="text-display-5 md:text-display-6 text-white font-bold">Personal</span>
            </div>
            
            <div className="w-full py-6">
              <img src={vectorline} alt="" className="w-full object-contain"/>
            </div>
              
            <div className="flex flex-col gap-2">

              <div 
                className="w-full flex gap-3 items-center cursor-pointer mb-2"
                onClick={() => setActiveTab("MAIN")}
              >
                <div className="w-full max-w-6 h-6">
                    <img 
                      src={puzzleicon} 
                      alt="puzzleicon" 
                      className={`w-full h-full object-contain transition-all ${activeTab === "MAIN" ? "brightness-0 invert" : "opacity-40"}`} 
                    />
                </div>
                <span className={`text-display-4 font-clash uppercase transition-colors ${activeTab === "MAIN" ? "text-white" : "text-white/40"}`}>Main</span>
              </div>
              
              <button 
                onClick={() => setActiveTab("HOME")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "HOME" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Home.jsx
              </button>

              <button 
                onClick={() => setActiveTab("STORY")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "STORY" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Story.jsx
              </button>

              <button 
                onClick={() => setActiveTab("SKILLS")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "SKILLS" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Skills.jsx
              </button>

              <button 
                onClick={() => setActiveTab("PROJECTS")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "PROJECTS" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Projects.jsx
              </button>

              <button 
                onClick={() => setActiveTab("LESSONS")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "LESSONS" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Lessons.jsx
              </button>

              <button 
                onClick={() => setActiveTab("CONTACT")}
                className={`text-display-3 flex flex-start font-poppins uppercase tracking-wide py-1 transition-colors duration-200 cursor-pointer ${activeTab === "CONTACT" ? "text-[#6eeb2c]" : "text-white/60 hover:text-white/90"}`}
              >
                Contact.jsx
              </button>
            </div>
          </div>

          <div className="w-full h-full bg-white/4 border border-white/8 rounded backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/12 hover:bg-white/6 flex items-center justify-center overflow-hidden">
            <img 
              src={getActiveImage()} 
              alt={`${activeTab} Interface`} 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;