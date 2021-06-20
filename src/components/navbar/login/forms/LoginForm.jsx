import React from 'react'
import {Form, Button, ListGroup} from 'react-bootstrap'
import './loginForm.css'
import iconoCarrito from '../../../../assets/login/carro-de-la-compra.png'
import iconoCorazon from '../../../../assets/login/amor.svg'
import iconoPalmera from '../../../../assets/login/palmera.png'
import tiraMaceta from '../../../../assets/login/tiraMacetas.jpg'


const LoginForm = () => {
    {document.body.style = 'background: #F3F4EE'} {/* cambio el color de fondo */}
    return (
        <div className="container mt-4 row contenedor__form">
            <h4 className="accedeATuCuenta"> ACCEDE A TU CUENTA</h4>    
            <div className="col-lg-6 contenedor__form__Uno">
                {/* FORMULARIO */}

                <Form>
                    <Form.Group className="mt-4" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder=" EMAIL" />
                        <Form.Text className="text-muted mt-3">
                        Nunca compartiremos esta informacion con nadie
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-4 " controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="PASSWORD" />
                    </Form.Group>

                    <Form.Group className="mt-4 " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    <div className="divbotonLogin">
                    <Button className="mt-4 botonLogin" variant="primary" type="submit">
                        LOG IN
                    </Button>
                    <label className="mt-4 textoTodavia">Todavia no estas registrado? Registrate!</label>
                    </div>
                    <div className="divbotonRegistro">
                        <Button className="mt-2 botonRegistro" variant="primary" type="submit">
                            REGISTRATE
                        </Button>
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

export default LoginForm
