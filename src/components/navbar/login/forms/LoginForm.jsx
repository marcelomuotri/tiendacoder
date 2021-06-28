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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
   

    //fondo
    {document.body.style = 'background: #F3F4EE'} {/* cambio el color de fondo */}

    const handleLogin = () => {
        setLogin(!login)
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

            props.history.push('/tienda') 
            
            const data= await db.collection(res.user.uid).get() // aca traigo la informacion de mi usuario
            const arrayData= await (data.docs.map(doc => ({titulo: doc.titulo, ...doc.data() }))) //recupero los datos y los guardo
            setNumProducto(arrayData[0].titulo)

        } catch (error) {
            console.log(error)
            if(error.code === "auth/wrong-password"){
                setError("El password es incorrecto")
            }
            if(error.code === "auth/user-not-found"){
                setError("El usuario no existe")
            }
            if (error.code === "auth/weak-password"){
                setError("la contraseña debe ser de al menos 6 caracteres")
            }
        }
    }, [email, password, props.history])

    const registrar = React.useCallback(async() => {
       
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password) // creo el usuario
            
            
            await db.collection('usuarios').doc(res.user.email).set({ // crea la coleccion
                email: res.user.email,
                uid: res.user.uid
            })

            await db.collection(res.user.uid).doc(res.user.email).set({ // agrega los productos a la coleccion, podria hacerlo de una pero prefiero que no 
                titulo: numProducto

            })
            setEmail('')
            setPassword('')
            setError(null)
            props.history.push('/tienda')
            
        } catch (error) {
            console.log(error)
            if(error.code === "auth/invalid-email"){
            setError("el mail es invalido")
            }
            if (error.code === "auth/email-already-in-use"){
                setError("El usuario ya existe")
            }
            if (error.code === "auth/weak-password"){
                setError("la contraseña debe ser de al menos 6 caracteres")
            }
            
        }
    },[email,password, props.history])

    

    return (

        <div className="container mt-4 row contenedor__form">
            
            <h4 className="accedeATuCuenta"> ACCEDE A TU CUENTA</h4>    
            
            <div className="col-lg-6 contenedor__form__Uno">
                {/* FORMULARIO */}

                <Form onSubmit={procesarDatos}>
                    <Form.Group className="mt-4" controlId="formBasicEmail">
                        
                        <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder=" EMAIL" />
                        
                    </Form.Group>

                    <Form.Group className="mt-4 " controlId="formBasicPassword">
                        <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="PASSWORD" />
                    </Form.Group>
                    
                   {/*  { // ACA AGREGO EL INPUT DE NOMBRE
                         login ?
                    <Form.Group className="mt-4 " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    //SINO
                    : 
                    <div>
                        <Form.Group className="mt-4 " controlId="formBasicName">
                            <Form.Control onChange={e => setNombre(e.target.value)} type="text" placeholder="INGRESA TU NOMBRE" />
                        </Form.Group>
                        <Form.Group className="mt-4 " controlId="formBasicSurname">
                            <Form.Control onChange={e => setApellido(e.target.value)} type="text" placeholder="INGRESA TU APELLIDO" />
                        </Form.Group>
                    </div>    
                        
                    } */}

                    <div className="divbotonLogin">
                    { login ?
                        <Button onClick={ ()=> ingreso()} className="mt-4 botonLogin" variant="primary" type="submit">
                            LOG IN
                        </Button>
                                :
                        <Button onClick={ ()=> registrar()} className="mt-4 botonLogin" variant="primary" type="submit">
                            REGISTRARSE
                        </Button>
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
                    </div>
                    
                </Form>
            </div>
             



            {/* SEGUNDA PARTE DEL */}
            <div className="col-lg-6 contenedor__form__Dos">
                
                <ListGroup>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "1" src={iconoCarrito}></img>
                        <p>Ahorra tiempo en tus próximos pedidos</p>
                    </div>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "2" src={iconoCorazon}></img>
                        <p>Guarda tu lista de productos favoritos</p>
                    </div>
                    <div className="alinearIconos">
                        <img class="iconoCarrito" alt = "3" src={iconoPalmera}></img>
                        <p>Benefíciate de descuentos exclusivos para ti</p>
                    </div>
                </ListGroup>
                <div>
                    <img className="tiraMaceta" alt = "4" src={tiraMaceta}></img>
                </div>
                
            </div>    
        </div>
    )
}

export default withRouter(LoginForm)
