function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      const duration = 600;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeInOutCubic =
          progress < 0.5
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
    <footer
      className="w-full text-white pt-15 pb-7.5 relative overflow-hidden border-t border-purple-400/20"
      style={{
        background:
          "linear-gradient(180deg, #5b21b6 0%, #3b0764 52%, #19042e 100%)",
      }}
    >
      <div className="w-full max-w-360 mx-auto px-fluid-x flex flex-col relative z-10">
        <div className="flex flex-col lg:flex-row w-full pb-10 lg:pb-15">
          <div className="w-full lg:w-[40%] flex flex-col items-start gap-6 border-b border-white/15 lg:border-b-0 lg:border-r pb-10 lg:pb-0 lg:pr-15 mb-10 lg:mb-0">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("Home")}
            >
              <img
                src="/icon.svg"
                alt="Portfolio Logo"
                loading="lazy"
                decoding="async"
                className="w-10 h-10 object-contain"
              />
              <span className="font-clash font-bold text-xl tracking-wider text-white">
                Owais Khan
              </span>
            </div>

            <p className="font-poppins text-[15px] font-light leading-6.5 text-white/90 max-w-[340px]">
              Creative portfolio built to showcase my frontend engineering skills,
              React 19 and Tailwind CSS v4 architecture, interactive UI motion,
              and custom Blender 3D projects.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@OwaisKhanFrontEnd-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-[#2a0845] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/owais-khan-ab3ab2436/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-[#2a0845] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>

              <a
                href="https://github.com/owaiskhanfrontend"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-[#2a0845] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://contra.com/owais_khan_qvkysvxd/work?r=owais_khan_qvkysvxd"
                target="_blank"
                rel="noreferrer"
                aria-label="Contra"
                className="w-10 h-10 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-[#2a0845] flex items-center justify-center font-clash font-bold text-xs transition-all duration-300"
              >
                C
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-1">
              <a
                href="https://github.com/owaiskhanfrontend?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="h-11 px-6 border border-white text-[13px] font-poppins font-semibold uppercase tracking-widest hover:bg-white hover:text-[#2a0845] transition-colors flex items-center gap-2"
              >
                View GitHub <span>→</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 lg:pl-20">
            <div className="flex flex-col gap-6">
              <h3 className="font-clash font-semibold text-display-2 uppercase tracking-widest text-white">
                Connect
              </h3>
              <div className="flex flex-col gap-4 font-poppins text-display-2 font-light text-white/80">
                <a
                  href="mailto:owaiskhan.frontend@gmail.com"
                  className="hover:text-white transition-colors w-fit"
                >
                  Email Me
                </a>
                <a
                  href="https://wa.me/923158174161"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+923183668327"
                  className="hover:text-white transition-colors w-fit"
                >
                  +92 318 3668327
                </a>
                <span
                  onClick={() => scrollToSection("About")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  About Me
                </span>
                <span
                  onClick={() => scrollToSection("Lessons")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  Lessons Learned
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-clash font-semibold text-display-2 uppercase tracking-widest text-white">
                Skills
              </h3>
              <div className="flex flex-col gap-4 font-poppins text-display-2 font-light text-white/80">
                <span
                  onClick={() => scrollToSection("Skill")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  React 19 & Context
                </span>
                <span
                  onClick={() => scrollToSection("Skill")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  Tailwind CSS v4
                </span>
                <span
                  onClick={() => scrollToSection("Skill")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  Blender 3D Pipelines
                </span>
                <span
                  onClick={() => scrollToSection("Skill")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  Framer Motion
                </span>
                <span
                  onClick={() => scrollToSection("Skill")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  REST APIs
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-clash font-semibold text-display-2 uppercase tracking-widest text-white">
                Projects
              </h3>
              <div className="flex flex-col gap-4 font-poppins text-display-2 font-light text-white/80">
                <span
                  onClick={() => scrollToSection("Projects")}
                  className="hover:text-white transition-colors w-fit cursor-pointer"
                >
                  View All Projects
                </span>
                <a
                  href="https://owaiskhan-moon-e-commerce.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  Moon E-Commerce
                </a>
                <a
                  href="https://owaiskhan-weather-dashboard.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  Weather App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white/15 pt-6 flex justify-center text-center font-poppins text-display-2 font-light text-white/70 relative z-10">
          <p>Designed &amp; Developed by</p>
        </div>

        <div
          aria-hidden="true"
          className="w-full overflow-hidden select-none pointer-events-none mt-4 flex justify-center"
        >
          <span className="font-clash font-bold uppercase text-white/[0.06] text-3xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] leading-none tracking-[0.14em] whitespace-nowrap">
            OWAIS KHAN
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;