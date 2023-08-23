import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Registration from './pages/Registration'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Welcomepage from './pages/welcome'
import Defaultconfig from './pages/Defaultconfig';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" exact element ={<Home />}></Route>
      <Route path ="/about" exact element ={<About />}></Route>
      <Route path ="/register" exact element ={<Registration />}></Route>
      <Route path ="/contact" exact element ={<Contact />}></Route>
      <Route path ="/feedback" exact element ={<Feedback />}></Route>
      <Route path ="/welcome" exact element ={<Welcomepage />}></Route>
      
      <Route path ="/default" exact element ={<Defaultconfig />}></Route>


    </Routes>
    </BrowserRouter>
    </>
 
  )
}

export default App;
