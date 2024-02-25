import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Specialising from "./components/Specialising";
import Expertise from "./components/Expertise";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";




const App = (props) => {
  useEffect(() =>{
    Aos.init({
      duration: 1000,
    });
  }, []);

  return(
    <div>
      <Hero />
      <Specialising />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;
