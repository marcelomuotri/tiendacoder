
import './App.css';
import LoginForm from './components/navbar/login/forms/LoginForm'
import RegistroForm from './components/navbar/login/forms/RegistroForm'

import Navbar from './components/navbar/Navbar.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import GaleriaTienda from './components/tienda/componenteTienda/galeria-tienda/GaleriaTienda';
import Quienes from './components/quienesSomos/Quienes';
import CheckOut from './components/tienda/Checkout'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      
        <Switch>
          <Route path="/quienessomos">
          <Quienes/>
            
          </Route>
          <Route path="/tienda">
            <GaleriaTienda/>
          </Route>
          <Route path="/loginform">
             <LoginForm/>
          </Route>
          <Route path="/registroform">
            <RegistroForm/>
          </Route>
          <Route path="/checkout">
            <CheckOut/>
          </Route>
    
        </Switch>
      </Router>
      
    </div>
    
   
  );
}

export default App;
