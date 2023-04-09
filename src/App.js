import "./App.css";
import CanvasScene from "./components/CanvasScene";
import Scroll from "./components/utills/Scroll";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Scroll />

      <div className="canvas">
        <CanvasScene />
      </div>
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
