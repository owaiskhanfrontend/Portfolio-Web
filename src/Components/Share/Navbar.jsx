import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

    setIsMenuOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/owais-khan-ab3ab2436/",
      "_blank",
      "noopener,noreferrer"
    );
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About Me", target: "About" },
    { label: "Skills", target: "Skill" },
    { label: "Projects", target: "Projects" },
    { label: "Lessons", target: "Lessons" },
    { label: "Contact me", target: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="w-full h-20 md:h-26 flex items-center px-fluid-x relative">
          <div className="w-full h-16 flex justify-between items-center md:px-0">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("Home")}
            >
              <div className="w-8 md:w-10 flex justify-center items-center">
                <img
                  src="/icon.svg"
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-display-5 md:text-display-6 text-white font-bold font-clash">
                Personal
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex lg:hidden text-white hover:text-white/70 transition-colors p-2 z-50 relative cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

            <div className="hidden lg:flex items-center bg-white/4 border border-white/8 px-8 py-2.5 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/12 hover:bg-white/6">
              <div className="flex items-center gap-9">
                {navItems.map((item) => (
                  <div
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="font-clash text-display-3 font-medium tracking-wide text-white/50 hover:text-white/90 py-1 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleLinkedInClick}
              className="hidden lg:flex py-2 px-8 rounded-full font-clash font-medium items-center justify-center gap-3 text-lg cursor-pointer bg-white text-black border-black shadow-[inset_0_6px_12px_rgba(0,0,0,0.15),_0_2px_4px_rgba(0,0,0,0.05)] hover:bg-neutral-50 hover:brightness-95 active:scale-95 transition-all"
            >
              View linkedin
            </button>
          </div>
        </nav>
      </header>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden z-30 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed inset-x-0 top-24 px-fluid-x will-change-[transform,opacity] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden z-40 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-3 scale-[0.98] pointer-events-none"
        }`}
      >
        <div className="w-full bg-black/75 border border-white/12 rounded-2xl backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] flex flex-col p-6 gap-5 text-white font-clash">
          {navItems.map((item, index) => (
            <div
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 35 + 40}ms` : "0ms",
              }}
              className={`text-display-3 font-medium text-white/80 hover:text-white cursor-pointer py-1 transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              {item.label}
            </div>
          ))}

          <button
            onClick={handleLinkedInClick}
            style={{
              transitionDelay: isMenuOpen ? `${navItems.length * 35 + 60}ms` : "0ms",
            }}
            className={`mt-2 py-3 w-full rounded-full font-clash font-medium flex items-center justify-center bg-white text-black text-lg cursor-pointer hover:bg-neutral-200 active:scale-95 transition-all duration-300 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            View linkedin
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;