import About from "./About";
import Contact from "./Contact";
import CustomButton from "./CustomButton";
import Experience from "./Experience";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Header from "./Navbar";
import Skills from './Skills';



function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      
      <HeroSection/>
      <br/>
      <CustomButton>About Me</CustomButton>
      <About/>
      <br/>
      <CustomButton>Skills</CustomButton>
      <Skills/>
      <br/>
      <CustomButton>Experience</CustomButton>
      <Experience/>
      <br/>
      <CustomButton>Contact</CustomButton>
      <Contact/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
