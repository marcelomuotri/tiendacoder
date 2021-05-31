import React from 'react'
import { Button, Card, } from 'react-bootstrap';
import './producto-checkOut.css'





const ProductoCheckOut = (props) => {

    


   

   
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
                        <Button onClick={props.tocame} className= "botonComprar"variant="primary">AGREGAR AL CARRITO</Button>
                    </div>
                </Card.Body>
            </Card>
        
    )
}

export default ProductoCheckOut