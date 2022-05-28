import './App.css';
import Router from './Router';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';
import Products from './components/products';


function App() {
  return (
    <Router>
     <Home/>
     <About/> 
    < Contact/>
    <Products/>
    </Router>
   
  );
}

export default App;
