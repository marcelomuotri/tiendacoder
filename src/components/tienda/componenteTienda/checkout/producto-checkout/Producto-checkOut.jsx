
import { Button, Card, } from 'react-bootstrap';
import './producto-checkOut.css'
import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from '../../../../context/DataProvider'




const ProductoCheckOut = (props) => {
    const value = useContext(DataContext);

    const [contador, setContador] = value.contador
    const [subtotal, setSubtotal] = value.subtotal
    const [detalle, setDetalle] = value.detalle
    const [numProducto, setNumproducto] = value.contador

    const handleAumentar = value.handleAumentar
    const handleDisminuir = value.handleDisminuir
    const handleDisminuirCantidad = value.handleDisminuirCantidad
    const handleAumentarCantidad = value.handleAumentarCantidad
    
    


    useEffect(() => {
        
        setSubtotal (contador * detalle.precio)
        
    }, [contador])



   

   
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
                        <label>Precio Unitario : $ {props.precio}</label>
                    </div>
                    {/* CONTADOR */}
                    <div className="botoneraModal justify-content-center">
                        <div className="contornoModal justify-content-center">
                            <button className="botonModal" onClick={ () => handleDisminuirCantidad()}>
                                -
                            </button>
                            <p className= "numeroModal">{props.cantidad}</p>
                            <button className="botonModal" onClick={ () => handleAumentarCantidad(props.id)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="cardPrecio mt-2">
                        <label>Precio Total : $ {props.subtotal}</label>
                    </div>
                    {/* BOTON */}
                    <div className="divBotonComprar mt-4">
                        <Button onClick={props.eliminarItem} className= "botonComprar"variant="primary">ELIMINAR DEL CARRITO</Button>
                    </div>
                </Card.Body>
            </Card>
        
    )
}

export default ProductoCheckOut