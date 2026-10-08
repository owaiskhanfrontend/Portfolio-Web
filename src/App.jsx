import Navbar from "./Components/Share/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
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
      </main>
    </>
  );
}

export default App;