
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

import DataProvider from './components/context/DataProvider'
import Prueba from './components/prueba';


function App() {
  return (
    <div>
    <DataProvider>
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
          
    
        </Switch>
      </Router>
    </DataProvider>  
      
    </div>
    
   
  );
}

export default App;
