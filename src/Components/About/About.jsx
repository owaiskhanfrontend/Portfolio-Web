import foundationicon from "../../assets/about assets/foundation.webp";
import brain from "../../assets/about assets/brain.webp";
import blendericon from "../../assets/about assets/blender.webp";
import jobready from "../../assets/about assets/jobready.webp";

function About() {
  const details = [
    {
      id: 1,
      img: foundationicon,
      text: "HTML, CSS & JS",
      description: "Think and reason like an engineer, not just write syntax.",
    },
    {
      id: 2,
      img: blendericon,
      text: "3D Assets",
      description: "Modeling and embedding custom Blender assets for immersive UIs.",
    },
    {
      id: 3,
      img: brain,
      text: "Frontend Dev",
      description: "Architecting production-quality web applications.",
    },
    {
      id: 4,
      img: jobready,
      text: "Job Ready",
      description: "Prepared for cross-functional engineering roles.",
    },
  ];

  return (
    <div className="w-full bg-black relative overflow-hidden">
      <div
        className="absolute top-37 right-13 w-[500px] md:w-[650px] h-[500px] md:h-[650px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/4 opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(126,34,206,0.15) 45%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="w-full max-w-360 h-auto mx-auto px-fluid-x flex flex-col py-10 md:py-15 gap-16 relative z-10">
        <div className="w-full max-w-3xl flex flex-col gap-5">
          <h2 className="text-display-6 md:text-display-9 font-bold text-white font-clash">
            The{" "}
            <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6,0_0_30px_#6eeb2c4d]">
              Journey
            </span>
          </h2>
          <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins">
           Over the past year of full-time self-study, I have transitioned from mastering HTML, CSS, and JavaScript fundamentals to architecting production-quality frontend applications using React.js. I specialize in building highly responsive, visually engaging user interfaces that bridge the gap between design and engineering.
          </p>
          <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins">
            While applying with this stack, I am continuously learning and adapting—actively expanding into{" "}
            <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6,0_0_30px_#6eeb2c4d]">
              TypeScript, Next.js, backend fundamentals, and Three.js
            </span>{" "}
            to pair my Blender 3D workflows with interactive web scenes and full-stack capabilities.
          </p>
        </div>

        <div className="relative w-full pt-8">
          <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-purple-600/40 z-0"></div>

          <div className="hidden md:block lg:hidden absolute top-[5rem] left-[19%] right-[19%] h-[2px] bg-purple-600/40 z-0"></div>
          <div className="hidden md:block lg:hidden absolute top-[22rem] left-[19%] right-[19%] h-[2px] bg-purple-600/40 z-0"></div>

          <div className="block md:hidden absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] bg-purple-600/40 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 relative z-10">
            {details.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center gap-5 p-4 md:p-0 rounded-2xl"
              >
                <div className="w-24 h-24 rounded-2xl bg-[#170529] p-4 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/40 relative z-10">
                  <img
                    src={item.img}
                    alt={item.text}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2 px-3 relative z-10 w-full">
                  <h3 className="text-display-5 font-bold text-white tracking-wide font-clash bg-[#170529]/90 md:bg-transparent border border-purple-500/30 md:border-none py-1.5 px-3 md:p-0 rounded-xl backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:shadow-none">
                    {item.text}
                  </h3>
                  <p className="font-poppins text-display-4 text-gray-300 bg-[#170529]/90 md:bg-transparent border border-purple-500/30 md:border-none p-3 md:p-0 rounded-xl backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:shadow-none">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;