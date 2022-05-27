import './App.css';
import Router from './Router';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';


function App() {
  return (
    <Router>
     <Home/>
     <About/> 
    <Contact ></Contact>
    </Router>
   
  );
}

export default App;
