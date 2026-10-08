import { useState, useEffect } from "react";
import logo from "../../assets/navbar assets/Group.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
    
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {

        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full h-20 md:h-26 flex items-center  px-fluid-x relative">
        <div className="w-full h-16 flex justify-between items-center md:px-0 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-8 md:w-10 flex justify-center items-center">
              <img src={logo} alt="logo" className="w-full object-contain brightness-0 invert" />
            </div>
            <span className="text-display-5 md:text-display-6 text-white font-bold">Personal</span>
          </div>

  
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:flex lg:hidden text-white hover:text-white/70 transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className="hidden lg:flex items-center bg-white/4 border border-white/8 px-8 py-2.5 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/12 hover:bg-white/6">
          
            <div className="flex items-center gap-9">
              <div className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer">About Me</div>
              <div className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer">Skills</div>
              <div className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer">Projects</div>
              <div className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer">Lessons</div>
              <div className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer">Contact me</div>
            </div>
          </div>

    
          <div className="hidden lg:flex py-2 px-8 rounded-full font-medium items-center justify-center gap-3 text-lg cursor-pointer bg-white text-black border-black shadow-[inset_0_6px_12px_rgba(0,0,0,0.15),_0_2px_4px_rgba(0,0,0,0.05)] hover:bg-neutral-50 hover:brightness-95 active:scale-95 transition-all">
            View linkedin
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#111] border-b border-white/10 shadow-lg md:flex lg:hidden flex flex-col p-6 gap-6 z-40 text-white font-clash">
            <div className="text-lg hover:text-white/70 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About Me</div>
            <div className="text-lg hover:text-white/70 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Skills</div>
            <div className="text-lg hover:text-white/70 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Project</div>
            <div className="text-lg hover:text-white/70 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact me</div>
            
            <div className="mt-2 py-3 w-full rounded-full font-medium flex items-center justify-center bg-white text-black text-lg cursor-pointer hover:bg-neutral-200 active:scale-95 transition-transform" onClick={() => setIsMenuOpen(false)}>
              View linkedin
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;