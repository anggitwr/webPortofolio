import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portofolio from './components/Portofolio';

function App() {
  return (
    <div className="App">
    <Navbar/> 
		<Hero />
		<Services />
		<Portofolio />
    </div>
  );
}
export default App;
