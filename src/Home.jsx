import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <Navbar></Navbar>
          <HomeHeader></HomeHeader>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Home;
