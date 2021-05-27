import React  from 'react'
import logotipo from '../../assets/comunes/logo/logotipo.jpg'
import './Navbar.css';
import Login from './login/Login'
import Opciones from './opciones/Opciones';



const Navbar = () => {

    
    return(
        <div >
                <nav class="navbar navbar-expand-lg navbar-light bg-light margenes-header">
                    <div class="col-lg-3">
                        <a class="navbar-brand" href='index.html'>
                        <img src={logotipo} width="80" height="80"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <Opciones/>
                    </div>
                    <div class="col-lg-3 ">
                        <Login />
                    </div> 
                </nav>
            
        </div>
     
    )
    
}

export default Navbar
