const MOON_ECOMMERCE_LESSONS = [
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
    title: "EFFECT LIFECYCLES",
    desc: "Declarative side-effect handling with useEffect managed async API data flows, dynamic asset subscriptions, and memory cleanup systematically.",
  },
  {
    title: "OPTIMIZED 3D & ASSET LOADING",
    desc: "Lazy-loading, dynamic imports, and modular canvas wrappers enabled smooth Blender 3D scene rendering directly inside the React tree.",
  },
];

const MOON_ECOMMERCE_MISTAKES = [
  {
    title: "LATE GIT PUSHES BEFORE DEPLOYMENT",
    desc: "Held off on pushing progress and ended up pushing the bulk of the codebase right around Netlify deployment instead of committing incrementally—a habit I corrected with consistent pushes on this portfolio.",
  },
  {
    title: "ASSET WEIGHT AUDITING",
    desc: "Carried forward asset size lessons learned from previous builds to ensure 3D models and textures remained lightweight and web-optimized.",
  },
];

const WEATHER_DASHBOARD_LESSONS = [
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

const WEATHER_DASHBOARD_MISTAKES = [
  {
    title: "UNOPTIMIZED ASSET OVERSIGHT",
    desc: "Mistakenly left an unoptimized asset bloat up to 916KB during early development. It was a painful lesson on payload tracking that was fully fixed and optimized later in the e-commerce build.",
  },
  {
    title: "PUSHING ALL AT ONCE AT DEPLOYMENT",
    desc: "Even knowing I would deploy to Netlify, I waited and pushed almost everything at once near deployment rather than pushing small checkpoints throughout development.",
  },
];

function LessonsOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-6 items-stretch">
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
            {MOON_ECOMMERCE_LESSONS.map((item) => (
              <div key={item.title} className="flex gap-3.5 items-start">
                <div className="w-6 h-6 rounded-full bg-[#6FEB2C]/20 border border-[#6FEB2C] text-[#6FEB2C] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-clash font-semibold tracking-wider text-[#6FEB2C] text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="font-poppins text-xs md:text-sm leading-relaxed text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-purple-500/30 flex flex-col gap-4">
            <h4 className="font-clash text-xs md:text-sm font-bold tracking-widest text-purple-300 uppercase">
              Mistakes & Key Takeaways
            </h4>
            <div className="flex flex-col gap-5">
              {MOON_ECOMMERCE_MISTAKES.map((item) => (
                <div key={item.title} className="flex gap-3.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-clash font-semibold tracking-wider text-purple-200 text-xs md:text-sm">
                      {item.title}
                    </h5>
                    <p className="font-poppins text-xs md:text-sm leading-relaxed text-gray-300">
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
              The raw browser engine, DOM bottlenecks, and scaling limits it taught me.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {WEATHER_DASHBOARD_LESSONS.map((item) => (
              <div key={item.title} className="flex gap-3.5 items-start">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/30 text-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-clash font-semibold tracking-wider text-white text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="font-poppins text-xs md:text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <h4 className="font-clash text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
            Mistakes & Key Takeaways
            </h4>
            <div className="flex flex-col gap-5">
              {WEATHER_DASHBOARD_MISTAKES.map((item) => (
                <div key={item.title} className="flex gap-3.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-clash font-semibold tracking-wider text-red-300 text-xs md:text-sm">
                      {item.title}
                    </h5>
                    <p className="font-poppins text-xs md:text-sm leading-relaxed text-gray-400">
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
  );
}

export default LessonsOverview;