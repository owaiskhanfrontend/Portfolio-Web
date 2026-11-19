import LessonsOverview from "./LessonsOverview";

function Lessons() {
  return (
    <section id="lessons" className="w-full bg-black">
      <div className="w-full max-w-360 px-4 md:px-8 mx-auto py-12 md:py-20 flex flex-col gap-10">
        <div className="w-full flex flex-col items-center text-center gap-3 mx-auto">
          <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
            Engineering Lessons &{" "}
            <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">
              Architectural Evolution
            </span>
          </h2>
          <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins max-w-3xl">
            I believe true engineering maturity comes from making mistakes,
            continuous learning, and persistent practice. Programming is like a
            loop—repeating foundational cycles across different scenarios,
            refactoring under constraints, and understanding how modern
            frameworks transformed my workflow after mastering HTML, CSS, and
            Vanilla JS.
          </p>
        </div>
        <LessonsOverview />
      </div>
    </section>
  );
}

export default Lessons;