import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home/Home';
import Gallery from './components/pages/Gallery';
import Footer from './components/Footer/Footer';
import JoinUs from './components/pages/Join-Us/JoinUs';
import Booking from './components/pages/Booking/Booking';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/joinUs' component={JoinUs}/>
          <Route path='/booking' component={Booking}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
