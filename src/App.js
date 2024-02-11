import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';
const App = () => {
  return (
    <>     
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
