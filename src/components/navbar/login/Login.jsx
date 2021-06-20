import React from 'react'
import './Login.css'

import{
    Link
  } from "react-router-dom";
import CartWidget from './forms/CartWidget';






const Login = () => {

    



   
    return (
        
        <div>
                    
                    <div className="collapse navbar-collapse justify-content-center " id="intro">
                        <div className="navbar-nav d-flex ">
                            <Link to='/loginform'>
                                <button className="botonLogIn">
                                    INICIAR SESION
                                </button>
                            </Link>
                            <Link to='/registroform'>
                                <button className="botonRegistrarse">
                                    REGISTRARSE
                                </button>
                            </Link>    
                            
                           
                                
                              
                        </div>
                    </div>

                    

        </div>
        
    )
}

export default Login
