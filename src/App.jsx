import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styles from "./style";
import { Navbar, Home, Mu, Footer, SignUp, Recruiter, Blog } from "./components";

const App = () => {

  const useHomePageStyles = () => {
    const location = useLocation();
    return location.pathname === "/" ? "h-screen" : "";
  };

  return (
      <div className={`bg-primary w-full overflow-hidden flex flex-col ${useHomePageStyles()}`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className={`${styles.flexCenter} ${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mu" element={<Mu />} />
              <Route path="/recruiter" element ={<Recruiter/>}/>
              <Route path="/blog" element ={<Blog/>}/>
              <Route path="/signup" element ={<SignUp/>}/>
            </Routes>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
  );
};

export default App;