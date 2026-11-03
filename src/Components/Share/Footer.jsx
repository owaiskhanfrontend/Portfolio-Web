import logo from "../../assets/navbar assets/Group.svg";

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      
      const duration = 600; 
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-15 pb-7.5">
      <div className="w-full max-w-360 mx-auto px-fluid-x flex flex-col">
        
        <div className="flex flex-col lg:flex-row w-full pb-10 lg:pb-15">
          
          <div className="w-full lg:w-[40%] flex flex-col items-start gap-6 border-b border-white/20 lg:border-b-0 lg:border-r pb-10 lg:pb-0 lg:pr-15 mb-10 lg:mb-0">
            
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("Home")}>
              <img src={logo} alt="Portfolio Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="font-poppins font-bold text-xl tracking-wider text-white">Owais Khan</span>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-inter text-[15px] font-light leading-6.5 opacity-80 max-w-[320px]">
                Creative Frontend & UI Developer specializing in React 19, Tailwind CSS v4, and custom Blender 3D assets to build high-performance web applications and premium interfaces.
              </p>
              
              <p className="font-inter text-[13px] font-light leading-5.5 text-amber-400/90 max-w-85">
                <strong>Behind the Scenes:</strong> I document my entire front-end engineering journey, UI decisions, and Blender workflows. Watch the process on my <a href="https://www.youtube.com/@OwaisKhanFrontEnd-dev" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">YouTube Channel</a>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="https://github.com/owaiskhanfrontend?tab=repositories" target="_blank" rel="noreferrer" className="h-11 px-6 border border-white text-[13px] font-inter font-semibold uppercase tracking-widest hover:bg-white hover:text-[#2C2D35] transition-colors flex items-center gap-2">
                View GitHub <span>→</span>
              </a>
              
              <a href="https://www.linkedin.com/in/owais-khan-ab3ab2436/" target="_blank" rel="noreferrer" className="h-11 px-6 border border-white text-[13px] font-inter font-semibold uppercase tracking-widest hover:bg-white hover:text-[#2C2D35] transition-colors flex items-center gap-2">
                Let's Connect <span>→</span>
              </a>
            </div>

          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 lg:pl-20">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">Connect</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">
                <a href="https://www.linkedin.com/in/owais-khan-ab3ab2436/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">LinkedIn</a>
                <a href="https://github.com/owaiskhanfrontend" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">GitHub</a>
                <a href="https://wa.me/923158174161" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">WhatsApp</a>
                <a href="tel:+923183668327" className="hover:opacity-100 transition-opacity w-fit">+92 318 3668327</a>
                <span onClick={() => scrollToSection("About")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">About Me</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">Skills</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">
                <span onClick={() => scrollToSection("Skill")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">React 19 & Context</span>
                <span onClick={() => scrollToSection("Skill")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">Tailwind CSS v4</span>
                <span onClick={() => scrollToSection("Skill")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">Blender 3D Pipelines</span>
                <span onClick={() => scrollToSection("Skill")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">Framer Motion</span>
                <span onClick={() => scrollToSection("Skill")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">REST APIs</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-inter font-semibold text-display-2 uppercase tracking-widest">Projects</h3>
              <div className="flex flex-col gap-4 font-inter text-display-2 font-light opacity-80">
                <span onClick={() => scrollToSection("Projects")} className="hover:opacity-100 transition-opacity w-fit cursor-pointer">View All Projects</span>
                <a href="https://owaiskhan-moon-e-commerce.netlify.app/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">Moon E-Commerce</a>
                <a href="https://owaiskhan-weather-dashboard.netlify.app/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity w-fit">Weather App</a>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full border-t border-white/20 pt-6 flex justify-center text-center font-inter text-display-2 font-light opacity-60">
          <p>
            Designed & Developed by Owais Khan | 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;