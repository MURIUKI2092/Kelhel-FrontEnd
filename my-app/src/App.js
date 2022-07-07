import './App.css';
import Router from './Router';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';
import Products from './components/products';
import SignIn from './admin/components/login';
import { SideBar } from './admin/components/navbar';
import Aggregates from './components/aggregates';
import Stones from './components/stones';
import Projects from './components/projects';


function App() {
  return (
    <Router>
     <Home/>
     <About/> 
    < Contact/>
    <Products/>
    <SignIn/>
    <SideBar/>
    <Aggregates/>
    <Stones/>
    <Projects/>
    </Router>
   
  );
}

export default App;
