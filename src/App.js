import {useState} from 'react'
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
import Inicio from './components/inicio/Inicio'
import Footer from './components/footer/Footer';

import DataProvider from './components/context/DataProvider'



function App() {

  const [fondo,setFondo] = useState(true)





  
  return (
    <div className="background">

    <DataProvider>
      <Router>
      <Navbar/>
     
        <Switch>

          <Route path="/quienessomos">
            
            <Quienes/> {/* CAMBIA EL FONDO */}
            <Footer/>
          </Route>

          <Route path="/tienda">
            <ItemListContainer/>
            <Footer/>
          </Route>

          <Route path="/loginform">
             <LoginForm/>
             <Footer/>
          </Route>

          <Route path="/registroform">
            <RegistroForm/>
            <Footer/>
          </Route>

          <Route path="/">
            <Inicio/>
          </Route>
          
        </Switch>
      </Router>
    </DataProvider>  
      
    </div>
    
   
  );
}

export default App;
