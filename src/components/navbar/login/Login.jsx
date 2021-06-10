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
                                    Log in
                                </button>
                            </Link>
                            <Link to='/registroform'>
                                <button className="botonRegistrarse">
                                    Registrarse
                                </button>
                            </Link>    
                            
                            <CartWidget />
                                
                              
                        </div>
                    </div>

                    

        </div>
        
    )
}

export default Login
