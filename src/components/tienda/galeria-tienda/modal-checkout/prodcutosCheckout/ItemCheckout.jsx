
import { Button, Card, } from 'react-bootstrap';
import React, {useContext, useState, useEffect} from 'react'
import "./itemCheckout.css"
import {DataContext} from '../../../../context/DataProvider'
import flechaverdearriba from '../../../../../assets/tienda/modalcarrito/flecharriba.png'
import flechaverdeabajo from '../../../../../assets/tienda/modalcarrito/flechabajo.png'
import cerrarverde from '../../../../../assets/tienda/modalcarrito/cerrarchico.png'

const ItemCheckout = (props) => {

    const value = useContext(DataContext);
    const [contador, setContador] = value.contador
    const [subtotal, setSubtotal] = value.subtotal


    


    return (
        <div>
             <Card className="card cardItemCheckout" >
                {/* IMAGEN */}
                <div>
                    <Card.Img className="cardItemCheckout_imagen " variant="top" src= {props.imagen}/>
                    
                </div>
                <Card.Body className="cardItemCheckout_cardBody">
                
                <div className="flex">
                    {/* TITULO */}
                        <Card.Title className="cardItemCheckout_titulo">{props.titulo}</Card.Title>
                        <button className="btnEliminar" onClick={props.eliminarItem}> <img className="cerrarchico" src={cerrarverde}></img> </button>
                </div>
                <div className="cardItemCheckout_flex justify-content-around">
                        
                        {/* CONTADOR */}
                        <div className="cardItemCheckout_pcp cardItemCheckout_botones">
                            <button className="checkBoton" onClick={props.reducir} ><img src={flechaverdeabajo}></img></button>
                            <p className="cantidad">{props.cantidad}</p>
                            <button className="checkBoton" onClick={props.aumentar}><img src={flechaverdearriba}></img></button>
                        </div>
                        <div className="cardItemCheckout_pcp" >
                            <label> ${props.subtotal}</label>
                        </div>
                </div>
                    
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCheckout
