import { Button, Card, } from 'react-bootstrap';
import './producto.css'
import React, {useState, useContext} from 'react'
import {DataContext} from '../../../context/DataProvider'
import carroVerde from '../../../../assets/tienda/carroblanco.png'


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
                    <div className="contenedorPrecioComprar mt-4">
                        {/* PRECIO */}
                        <div className="cardPrecio ">
                            <label>${props.precio}</label>
                        </div>
                        {/* BOTON */}
                       
                        <a onClick={props.tocame} className="botonComprar">
                            <a className= "texto" > AGREGAR </a>
                            <img className="icono2" src={carroVerde} alt="auto"></img>
                        </a>
                           
                    </div>    
                </Card.Body>
            </Card>
        
    )
}

export default Producto
