import React  from 'react'
import logotipo from '../../assets/comunes/logo/logotipo.jpg'
import './Navbar.css';
import Login from './login/Login'
import Opciones from './opciones/Opciones';



const Navbar = () => {

    
    return(
        <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light margenes-header">
                    <div className="col-lg-3">
                        <a className="navbar-brand" href='index.html'>
                        <img src={logotipo} alt="" width="80" height="80"/>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <Opciones/>
                    </div>
                    <div className="col-lg-3 ">
                        <Login />
                    </div> 
                </nav>
            
        </div>
     
    )
    
}

export default Navbar
