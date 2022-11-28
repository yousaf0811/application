import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' element={Home}/>
        <Route exact path='/about' element={About}/>
        <Route exact path='/contact' element={Contact}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
