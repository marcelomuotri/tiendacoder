import React, { useContext } from 'react'
import './Login.css'
import { DataContext } from '../../context/DataProvider'

import {
    Link
} from "react-router-dom"
import { auth } from '../../../firebase'
import { withRouter } from 'react-router'

const Login = (props) => {

    const value = useContext(DataContext)


    const [login, setLogin] = value.login

    //voy a registrar mis variables para el login

    const cerrarSesion = () => {

        auth.signOut()
            .then(() => {
                props.history.push('/loginform') // empujo al loginform

            })
    }

    const handleALogin = () => {
        setLogin(true)
    }

    const handleAResgistrarse = () => {
        setLogin(false)
    }

    return (

        <div>

            <div className="collapse navbar-collapse justify-content-center " id="intro">
                <div className="navbar-nav d-flex ">
                    {
                        props.firebaseUser !== null ? ( //si hay un usuario logueado
                            <div class="navbar-nav d-flex">
                                <label> {props.firebaseUser.email}</label>
                                <button onClick={() => cerrarSesion()} className="botonLogIn">
                                    CERRAR SESION
                                </button>
                            </div>
                            
                        ) : ( //si no hay un usuario logueado
                            <div class="navbar-nav d-flex">
                                <Link to='/loginform'>
                                    <button onClick={() => handleALogin()} className="botonLogIn">
                                        INICIAR SESION
                                    </button>
                                </Link>
                                <Link to='/loginform'>
                                    <button onClick={() => handleAResgistrarse()} className="botonRegistrarse">
                                        REGISTRARSE
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default withRouter(Login)
