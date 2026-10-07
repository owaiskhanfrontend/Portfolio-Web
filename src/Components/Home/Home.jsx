import Hero from "./Hero";
import Background from "../../assets/Home assets/Background_001.png";

function Home() {
  return (
    <div 
      className="w-full min-h-screen pt-50 bg-cover bg-center flex overflow-hidden   relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Hero />
    </div>
  );
}

export default Home;