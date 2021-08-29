import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ParticlesConfig from './components/ParticlesConfig';

function App() {
  return (
    <div className="App">
      <Particles
        params={ParticlesConfig} />
      <Header />
      <Navbar />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
