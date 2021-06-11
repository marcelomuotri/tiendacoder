
import './App.css';
import LoginForm from './components/navbar/login/forms/LoginForm'
import RegistroForm from './components/navbar/login/forms/RegistroForm'

import Navbar from './components/navbar/Navbar.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import ItemListContainer from './components/tienda/ItemListContainer'
import Quienes from './components/quienesSomos/Quienes';


import DataProvider from './components/context/DataProvider'



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
            <ItemListContainer/>
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
