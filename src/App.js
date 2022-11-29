import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import Adduser from './components/users/addusers';
import Edituser from './components/users/edituser';
import View from './components/users/view';
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/adduser' component={Adduser}/>
        <Route exact path='/users/edituser/:id' component={Edituser}/>
        <Route exact path="/users/:id" component={View}/>

        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
