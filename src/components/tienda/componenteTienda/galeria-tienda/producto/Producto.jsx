import { Button, Card, } from 'react-bootstrap';
import './producto.css'
import React, {useState, useContext} from 'react'
import {DataContext} from '../../../../context/DataProvider'


const Producto = (props) => {

    /// context
    const value = useContext(DataContext);
    
    ////

    const [ comprado, setComprado] = useState(true)

    
        

    const cambioEstado = () =>{
        setComprado (true)
    }

    const cambioEstado2 = () =>{
        setComprado (false)
    }


   
    return (
        
            <Card className="card" >
                {/* IMAGEN */}
                <div>
                    <Card.Img className="cardImagen rounded mx-auto d-block" variant="top" src={props.imagen} />
                </div>
                <Card.Body>
                    {/* TITULO */}
                    <Card.Title className="cardTitulo">{props.titulo}</Card.Title>
                    {/* PRECIO */}
                    <div className="cardPrecio mt-2">
                        <label>$ {props.precio}</label>
                    </div>
                    {/* BOTON */}
                    <div className="divBotonComprar mt-4">
                    { comprado ? <Button onClick={props.tocame} className= "botonComprar"variant="primary">AGREGAR AL CARRITO</Button>
                        :
                        <Button onClick={props.tocame} className= "botonComprar"variant="primary">REMOVER </Button>
                    }
                    </div>
                </Card.Body>
            </Card>
        
    )
}

export default Producto
