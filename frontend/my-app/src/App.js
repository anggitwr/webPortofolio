import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
// import Ikaa from './components/Ikaa';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
    <Navbar/> 
		<Hero />
		<Services />
		<Portofolio />
		<Offer />
    </div>
  );
}
export default App;
