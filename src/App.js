
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import './App.css';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import Project from './components/Project/Project';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Cards></Cards>
      <Footer></Footer>
      <Header></Header>
      <Services></Services>
      <Project></Project>
      <Achievements></Achievements>
      <Contact></Contact>
    </div>
  );
}

export default App;
