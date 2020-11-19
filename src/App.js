
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import './App.css';
import Cards from './components/Cards/Cards';
import Project from './components/Project/Project';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      
      <Header></Header>
      <Services></Services>

      <Project></Project>
      <Achievements></Achievements>
      <Cards></Cards>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
