import foundationicon from "../../assets/about assets/foundation.webp"
import brain from "../../assets/about assets/brain.webp"
import blendericon from "../../assets/about assets/blender.webp"
import jobready from "../../assets/about assets/jobready.webp"

function About() {

  const details = [
    {
      id: 1,
      img: foundationicon,
      text: "HTML, CSS & JS",
      description: "Think and reason like an engineer, not just write syntax."
    },
    {
      id: 2,
      img: brain,
      text: "Frontend Dev",
      description: "Architecting production-quality web applications."
    },
    {
      id: 3,
      img: blendericon,
      text: "3D Assets",
      description: "Modeling and embedding custom Blender assets for immersive UIs."
    },
    {
      id: 4,
      img: jobready,
      text: "Job Ready",
      description: "Prepared for cross-functional engineering roles."
    },
  ];

  return (
   
    <div className="w-full bg-black"> 
      
      <div className="w-full max-w-360 h-auto mx-auto px-fluid-x flex flex-col py-10 md:py-15 gap-16">
        
      
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <h2 className="text-display-6 md:text-display-9 font-bold text-white font-clash">The Journey</h2>
          <p className="text-gray-300 text-display-4 md:text-display-5 leading-relaxed font-poppins">
            Over the past ten months of full-time study, I have transitioned from mastering HTML, CSS, and JavaScript fundamentals to architecting production-quality frontend applications using React.js. I specialize in building highly responsive, visually engaging user interfaces that bridge the gap between design and engineering.
          </p>
  
        </div>

        <div className="relative w-full pt-8">
          
    
          <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-purple-600/40 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {details.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center gap-5">
                
                <div className="w-24 h-24 rounded-2xl bg-[#170529] p-4 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/40">
                  <img 
                    src={item.img} 
                    alt={item.text} 
                    className="w-full h-full object-contain" 
                  />
                </div>

             
                <div className="flex flex-col gap-2 px-2">
                  <h3 className="text-display-5 font-bold text-white tracking-wide font-clash">{item.text}</h3>
                  <p className="text-display-4 text-gray-400">{item.description}</p>
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