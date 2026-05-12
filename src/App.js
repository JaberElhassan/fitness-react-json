import './App.css';
import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
import Guide from './components/guide/Guide';


function App() {
  return (
    <div className="App">
      
      <HeroSection/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Guide/>
      <Footer/>
  
    </div>
  );
}

export default App;
