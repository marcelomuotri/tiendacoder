import React from 'react'
import './Login.css'
import carro from '../../../assets/login/carro-de-la-compra.png'

import{
    Link
  } from "react-router-dom";


const Login = () => {
    
   ;



   
    return (
        
        <div>
                    
                    <div className="collapse navbar-collapse justify-content-center " id="intro">
                        <div class="navbar-nav d-flex ">
                            <Link to='/loginform'>
                                <button class="botonLogIn">
                                    Log in
                                </button>
                            </Link>
                            <Link to='/registroform'>
                                <button class="botonRegistrarse">
                                    Registrarse
                                </button>
                            </Link>    
                            <Link class="none" to='/checkout'>
                            <img className="carrito" src={carro} alt="hola"></img>
                            </Link>  
                        </div>
                    </div>

                    

        </div>
        
    )
}

export default Login
