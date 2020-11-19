
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import './App.css';
import Project from './components/Project/Project';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Project></Project>
      <Achievements></Achievements>
      <Contact></Contact>
    </div>
  );
}

export default App;
