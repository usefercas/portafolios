import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div className=" ">
      <NavBar />
      <SlideBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;