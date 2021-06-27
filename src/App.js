import {useState,useEffect, useContext} from 'react'
import './App.css';
import LoginForm from './components/navbar/login/forms/LoginForm'

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
import {DataProvider} from './components/context/DataProvider'


import {auth} from './firebase.js'



function App() {



  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
      auth.onAuthStateChanged(user => {
          console.log(user)
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
      
  }, []) // esto es para saber si hay una sesion de usuario iniciada

  
  return  firebaseUser !== false ? (
    <div className="background">

    <DataProvider>
      <Router>
      <Navbar firebaseUser={firebaseUser}/>
     
        <Switch>

          <Route path="/quienessomos">
            
            <Quienes/> {/* CAMBIA EL FONDO */}
            <Footer/>
          </Route>

          <Route path="/tienda">
            <ItemListContainer firebaseUser={firebaseUser}/>
            <Footer/>
          </Route>

          <Route path="/loginform">
             <LoginForm firebaseUser={firebaseUser}/>
             <Footer/>
          </Route>

          

          <Route path="/">
            <Inicio/>
          </Route>
          
        </Switch>
      </Router>
    </DataProvider>  
      
    </div>
    
   
  ) : (
    <div>Cargando...{firebaseUser}</div>
  )
}

export default App;
