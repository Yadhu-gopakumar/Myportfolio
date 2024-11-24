import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';
import "./components/Loader.css"
import { useEffect, useState } from 'react';
const App = () => {
  const [screenLoading, setScreenLoading] = useState(true);
  useEffect(() => {

    useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  const Loader = () => {
    return (
      <div className='preloaderbody'>
        <div className='circle'></div>
      </div>
    );
  }

  return (
   <div className={screenLoading ? 'app hidden' : 'app'}>
      {screenLoading && (
        <div className="preloaderbody">
          <div className="circle"></div>
        </div>
      )}
      {!screenLoading && (
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
}

export default App
