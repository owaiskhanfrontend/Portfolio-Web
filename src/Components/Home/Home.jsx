import Hero from "./Hero";
import Background from "../../assets/Home assets/background.png";

function Home() {
  return (
    <div
      className="w-full h-auto bg-cover bg-center flex overflow-hidden relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 xl:h-52 z-[1] bg-gradient-to-b from-transparent to-black"
      />

      <Hero />
    </div>
  );
}

export default Home;