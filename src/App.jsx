import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Home">
          <Home />
        </section>
      </main>
    </>
  );
}

export default App;