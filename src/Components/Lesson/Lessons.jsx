function Lessons() {
  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full max-w-360 h-auto px-4 md:px-8 mx-auto py-12 md:py-20">
        <div className="w-full h-auto flex flex-col gap-10">
          <div className="w-full h-auto flex gap-8">
            <div className="w-full h-auto flex flex-col items-center text-center gap-3 mx-auto">
              <h2 className="text-display-6 md:text-display-9 font-medium text-white font-clash">
                Engineering Lessons & <span className="text-[#6eeb2c] [text-shadow:0_0_15px_#6eeb2ca6]">Architectural Evolution</span>
              </h2>
              <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins items-center justify-center max-w-3xl">
                I believe true engineering maturity comes from making mistakes, continuous learning, and persistent practice. Programming is like a loop—repeating foundational cycles across different scenarios, refactoring under constraints, and understanding how modern frameworks transformed my workflow after mastering HTML, CSS, and Vanilla JS.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6 items-stretch">
            
            <div className="w-full min-h-[350px] bg-gradient-to-b from-[#250b3f] to-[#120422] border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.35)] rounded-3xl p-6 md:p-10 flex flex-col">
            </div>

            <div className="w-full min-h-[350px] bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col">
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Lessons;