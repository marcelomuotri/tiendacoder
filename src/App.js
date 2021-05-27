
import './App.css';
import LoginForm from './components/navbar/login/forms/LoginForm'
import RegistroForm from './components/navbar/login/forms/RegistroForm'

import Navbar from './components/navbar/Navbar.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import GaleriaTienda from './components/tienda/GaleriaTienda';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      
        <Switch>
          <Route path="/quienessomos">
            
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
      
    </div>
    
   
  );
}

export default App;
