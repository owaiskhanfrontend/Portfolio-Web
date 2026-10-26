import Navbar from "./Components/Share/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Projects from "./Components/Projects/Projects";
import Lessons from "./Components/Lesson/Lessons";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>

        <section id="Skill">
          <Skill />
        </section>

        <section id="Projects">
          <Projects />
        </section>

        <section id="Lessons">
          <Lessons />
        </section>

        <section id="Contact">
          <Contact />
        </section>

      </main>
    </>
  );
}

export default App;