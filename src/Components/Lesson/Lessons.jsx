function Lessons() {
  const moonEcommerceLessons = [
    {
      title: "COMPONENT MODULARITY",
      desc: "Isolated component trees, reusable UI blocks, and localized state keep code maintainable without constant context switching.",
    },
    {
      title: "DECLARATIVE STATE MANAGEMENT",
      desc: "Reactive state (useState, useContext) automatically synchronized the UI with underlying data models without manual DOM updates.",
    },
    {
      title: "UTILITY-FIRST TAILWIND V4",
      desc: "Rapid component styling with low-overhead CSS utility tokens, seamless responsive breakpoints, and custom design tokens built directly into the UI hierarchy.",
    },
    {
      title: "EFFECT LIFE-CYCLES",
      desc: "Declarative side-effect handling with useEffect managed async API data flows, dynamic asset subscriptions, and memory cleanup systematically.",
    },
    {
      title: "OPTIMIZED 3D & ASSET LOADING",
      desc: "Lazy-loading, dynamic imports, and modular canvas wrappers enabled smooth Blender 3D scene rendering directly inside the React tree.",
    },
  ];

  const moonEcommerceMistakes = [
    {
      title: "GIT VERSION CONTROL HABITS",
      desc: "Initially delayed pushing code early on in development. Learned the hard way to commit and push frequently to maintain clean history checkpoints.",
    },
    {
      title: "ASSET WEIGHT AUDITING",
      desc: "Carried forward asset size lessons learned from previous builds to ensure 3D models and textures remained lightweight and web-optimized.",
    },
  ];

  const weatherDashboardLessons = [
    {
      title: "MONOLITHIC FILE SWITCHING",
      desc: "Managing sprawling multi-file HTML/CSS setups led to endless tab switching, fragile class dependencies, and high global style bleed risks.",
    },
    {
      title: "DIRECT DOM MUTATIONS",
      desc: "Heavy reliance on document.querySelector and imperative innerHTML manipulations increased the risk of UI state bugs and fragile event listeners.",
    },
    {
      title: "MANUAL CSS SPECIFICITY",
      desc: "Writing raw CSS sheets from scratch consumed high setup time, created specificity conflicts, and slowed down iterative UI prototyping.",
    },
    {
      title: "MANUAL ASYNC FLOWS",
      desc: "Managing asynchronous fetch calls, manual event listener detachments, and global loading states required extensive boilerplate code.",
    },
    {
      title: "UNOPTIMIZED SCRIPT LOADING",
      desc: "Direct script tags and manual DOM canvas initializations often blocked main-thread parsing and caused layout shifts during asset fetch operations.",
    },
  ];

  const weatherDashboardMistakes = [
    {
      title: "UNOPTIMIZED ASSET OVER SIGHT",
      desc: "Mistakenly left an unoptimized asset bloat up to 800KB during early development. It was a painful lesson on payload tracking that was fully fixed and optimized later in the e-commerce build.",
    },
    {
      title: "DELAYED REMOTE BACKUPS",
      desc: "Just like the portfolio web build, delayed initial code pushes early in the project lifecycle, teaching me the critical value of consistent version control.",
    },
  ];

  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto py-12 md:py-20">
        <div className="w-full h-auto flex flex-col gap-10">
          <div className="w-full h-auto flex gap-8">
            <div className="w-full h-auto flex flex-col items-center text-center gap-3 mx-auto">
              <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
                Engineering Lessons &{" "}
                <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">
                  Architectural Evolution
                </span>
              </h2>
              <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins items-center justify-center max-w-3xl">
                I believe true engineering maturity comes from making mistakes,
                continuous learning, and persistent practice. Programming is like a
                loop—repeating foundational cycles across different scenarios,
                refactoring under constraints, and understanding how modern
                frameworks transformed my workflow after mastering HTML, CSS, and
                Vanilla JS.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6 items-stretch">
            
            <div className="w-full bg-gradient-to-b from-[#250b3f] to-[#120422] border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.35)] rounded-3xl p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="text-center mb-8 flex flex-col gap-1.5 pb-6 border-b border-purple-500/30">
                  <h3 className="font-clash text-display-4 md:text-display-8 font-semibold uppercase text-[#6FEB2C]">
                    MOON E-COMMERCE (REACT 19)
                  </h3>
                  <p className="font-poppins text-display-1 md:text-display-2 text-white font-light tracking-wide">
                    How moving to component architecture accelerated development speed, component isolation, and reactive state.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {moonEcommerceLessons.map((item, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#6FEB2C]/20 border border-[#6FEB2C] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#6FEB2C] text-xs font-bold">✓</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[#6FEB2C] font-clash text-sm md:text-base font-semibold tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 font-poppins text-xs md:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-purple-500/30 flex flex-col gap-4">
                  <h4 className="font-clash text-xs md:text-sm font-bold tracking-widest text-purple-300 uppercase">
                    ⚠️ Mistakes & Key Takeaways
                  </h4>
                  <div className="flex flex-col gap-5">
                    {moonEcommerceMistakes.map((item, idx) => (
                      <div key={idx} className="flex gap-3.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-purple-300 text-xs font-bold">!</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h5 className="text-purple-200 font-clash text-xs md:text-sm font-semibold tracking-wider">
                            {item.title}
                          </h5>
                          <p className="text-gray-300 font-poppins text-xs md:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="text-center mb-8 flex flex-col gap-1.5 pb-6 border-b border-white/10">
                  <h3 className="font-clash text-display-4 md:text-display-8 font-semibold uppercase text-white">
                    WEATHER DASHBOARD (VANILLA JS)
                  </h3>
                  <p className="font-poppins text-display-1 md:text-display-2 text-gray-400 font-light tracking-wide">
                    The raw browser engine and the core DOM fundamentals it taught me.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {weatherDashboardLessons.map((item, idx) => (
                    <div key={idx} className="flex gap-3.5 items-start">
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gray-300 text-xs font-bold">✓</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-white font-clash text-sm md:text-base font-semibold tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 font-poppins text-xs md:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                  <h4 className="font-clash text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
                    ⚠️ Mistakes & Key Takeaways
                  </h4>
                  <div className="flex flex-col gap-5">
                    {weatherDashboardMistakes.map((item, idx) => (
                      <div key={idx} className="flex gap-3.5 items-start">
                        <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-400 text-xs font-bold">!</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h5 className="text-red-300 font-clash text-xs md:text-sm font-semibold tracking-wider">
                            {item.title}
                          </h5>
                          <p className="text-gray-400 font-poppins text-xs md:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;