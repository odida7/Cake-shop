import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes> 
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Menu' element={<Menu />} />
          <Route exact path='/Info' element={<Info />} />
          <Route exact path='/Contact' element={<Contact />} />         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
