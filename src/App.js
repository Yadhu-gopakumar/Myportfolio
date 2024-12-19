import { useEffect, useState } from 'react';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

import './components/Loader.css';

const App = () => {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className={`app ${screenLoading ? 'hidden' : ''}`}>
      {screenLoading ? (
        <div className="preloaderbody">
          <div className="circle"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
