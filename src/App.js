import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PortFolio from "./Components/PortFolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <PortFolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
