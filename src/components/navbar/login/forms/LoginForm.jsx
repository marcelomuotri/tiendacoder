import React, {useState, useContext} from 'react'
import {Form, Button, ListGroup} from 'react-bootstrap'
import './loginForm.css'
import iconoCarrito from '../../../../assets/login/carro-de-la-compra.png'
import iconoCorazon from '../../../../assets/login/amor.svg'
import iconoPalmera from '../../../../assets/login/palmera.png'
import tiraMaceta from '../../../../assets/login/tiraMacetas.jpg'
import { db, auth } from '../../../../firebase'
import { withRouter } from 'react-router-dom'

import {DataContext} from '../../../context/DataProvider'



const LoginForm = (props) => {

    const value= useContext(DataContext)

    const [login, setLogin]= value.login
    const [numProducto, setNumProducto]= value.numProducto
    const [nombre, setNombre]= value.nombre
    const [modoBlanqueo, setModoBlanqueo] = value.modoBlanqueo
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [blanqueo, setBlanqueo] = useState('')
    
    
    //fondo
    document.body.style = 'background: #F3F4EE' /* cambio el color de fondo */

    const handleLogin = () => {
        setLogin(!login)
    }

    const handleBlanqueo = () => {
        setModoBlanqueo(false)
        
    }

    const procesarDatos = e =>{
        e.preventDefault()
       
    }    

        const [user, setUser] = React.useState(null)

        React.useEffect(() => {
            if(auth.currentUser){ // para saber si estas logueado
                console.log('existe')
                setUser(auth.currentUser)
                console.log(user)
            }else{
                console.log('no existe')
               
            }
            }, [])

            

    const ingreso = React.useCallback(async() => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, password)

            console.log(res.user)
            setError("ingresaste correctamente")
            setEmail('')
            setPassword('')
            setError(null)

            
            const data= await db.collection(res.user.uid).get() // aca traigo la informacion de mi usuario
            const arrayData= await (data.docs.map(doc => ({titulo: doc.titulo, ...doc.data() }))) //recupero los datos y los guardo
            setNumProducto(arrayData[0].titulo)

            props.history.push('/tienda')


        } catch (error) {
            console.log(error)
            if(error.code === "auth/wrong-password"){
                setError("El password es incorrecto")
            }
            if(error.code === "auth/user-not-found"){
                setError("El usuario no existe")
            }
            if (error.code === "auth/weak-password"){
                setError("la contrase??a debe ser de al menos 6 caracteres")
            }
        }
    }, [email, password, props.history])

    const registrar = React.useCallback(async() => {
       
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password) // creo el usuario

            await db.collection(res.user.uid).doc(res.user.email).set({ // agrega los productos a la coleccion, podria hacerlo de una pero prefiero que no 
                titulo: numProducto
            })


            setEmail('')
            setPassword('')
            setError(null)
            props.history.push('/tienda')
            
        } catch (error) {
            
            if(error.code === "auth/invalid-email"){
            setError("el mail es invalido")
            }
            if (error.code === "auth/email-already-in-use"){
                setError("El usuario ya existe")
            }
            if (error.code === "auth/weak-password"){
                setError("la contrase??a debe ser de al menos 6 caracteres")
            }
            
        }
    },[email,password, props.history])

    const recuperar = async() => {
    
        try {

            await auth.sendPasswordResetEmail(blanqueo)
            setError(null)
            alert("le hemos enviado un email para blanquear su contrase??a")
            

        } catch (error) {
            
            if(error.code === "auth/invalid-email" ){
                setError("Email no encontrado")
            }

            
        }
            
       
    }

    

    return (

        <div className="container mt-4 row contenedor__form">
            
            <h4 className="accedeATuCuenta"> ACCEDE A TU CUENTA</h4>    
            
            <div className="col-lg-6 col-sm-11 contenedor__form__Uno">
                {/* FORMULARIO */}
                {modoBlanqueo ?
                    <Form onSubmit={procesarDatos}>
                    
                        <Form.Group className="mt-4" controlId="formBasicEmail">
                            
                            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder=" EMAIL" />
                            
                        </Form.Group>

                        <Form.Group className="mt-4 " controlId="formBasicPassword">
                            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="PASSWORD" />
                        </Form.Group>
                        
                    

                        <div className="divbotonLogin">
                        { login ?
                            <div>
                            <label className="mt-4 ">Olvidaste tu contrase??a? <span onClick={ ()=> handleBlanqueo()}> Haz click aqui! </span> </label>
                            <Button onClick={ ()=> ingreso()} className="mt-4 botonLogin" variant="primary" type="submit">
                                LOG IN
                            </Button>
                            </div>
                                    :
                            <div>        
                            <Form.Group className="mt-4 " controlId="formBasicName">
                                <Form.Control onChange={e => setNombre(e.target.value)} type="text" placeholder="INGRESA TU NOMBRE" />
                            </Form.Group>
                            <Button onClick={ ()=> registrar()} className="mt-4 botonLogin" variant="primary" type="submit">
                                REGISTRARSE
                            </Button>
                            </div>
                        }
                    
                        {login ? 
                        <label className="mt-4 textoTodavia">Todavia no tienes cuenta? <span onClick={ ()=> handleLogin()}> Haz click aqui! </span> </label>
                        : 
                        <label className="mt-4 textoTodavia">Ya tenes una cuenta? <span onClick={ ()=> handleLogin()}> Haz click aqui! </span> 
                        </label>
                        
                        }
                            {error && (
                                    <div className="alert alert-danger">
                                    {error}
                                    </div>
                                )
                            }

                                {/* recuperar usuario */}
                           


                        </div>
                        
                    </Form>
                    :
                    <div>
                        <Form.Group className="mt-4 " controlId="blanquearContrase??a">
                            <Form.Control onChange={e => setBlanqueo(e.target.value)} type="text" placeholder="mail a blanquear" />
                        </Form.Group>
                        <Button onClick={ ()=> recuperar()} className="mt-4 botonLogin" variant="primary" type="submit">
                            Recuperar
                        </Button>
                        {error && (
                                    <div className="alert alert-danger mt-4">
                                    {error}
                                    </div>
                                )
                            }
                    </div>      
                }
            </div>
             



            {/* SEGUNDA PARTE DEL */}
            <div className="col-lg-6  contenedor__form__Dos">
                
                <ListGroup>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "1" src={iconoCarrito}></img>
                        <p>Ahorra tiempo en tus pr??ximos pedidos</p>
                    </div>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "2" src={iconoCorazon}></img>
                        <p>Guarda tu lista de productos favoritos</p>
                    </div>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "3" src={iconoPalmera}></img>
                        <p>Benef??ciate de descuentos exclusivos para ti</p>
                    </div>
                </ListGroup>
                
            </div>    
        </div>
    )
}

export default withRouter(LoginForm)
