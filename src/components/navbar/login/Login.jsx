import React from 'react'
import './Login.css'
import carro from '../../../assets/comunes/iconos-redes/carro.png'

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
                            
                            <img scr={carro} alt="hola"></img>
                                
                        </div>
                    </div>

                    

        </div>
        
    )
}

export default Login
