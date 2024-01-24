
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Premium from './components/Premium'; 
import { BrowserRouter as Router, Routes ,Route,NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Router>
        <div className='content'>
          <NavLink className='content' exact activeclassname="active" to="/"> Home </NavLink>
          <NavLink className='content' activeclassname="active" to="/About"> About </NavLink>
          <NavLink className='content' activeclassname="active" to="/Premium"> Premium </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Premium" element={<Premium />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
