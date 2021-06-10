import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from '../../../../context/DataProvider'
import {Modal, Button} from 'react-bootstrap'
import './modalProducto.css'


const ModalProducto = () => {
    //context
    const value = useContext(DataContext);
    const [show, setShow] = value.show
    const [numeroItem, setNumeroItem] = value.numeroItem
    const [contador, setContador] = value.contador
    const [detalle, setDetalle] = value.detalle
    const [subtotal, setSubtotal] = value.subtotal
    const data = value.data
    const compro = value.compro
    const handleAumentar = value.handleAumentar
    const handleDisminuir = value.handleDisminuir
    
    //context

    useEffect(() => {
        
        setSubtotal (contador * detalle.precio)
        console.log(detalle.precio)
        
        
    }, [contador])


    const handleClose = () => setShow(false);

    
    return (
        <div> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="tituloModal justify-content-center">
                    <Modal.Title >AGREGAR AL CARRITO</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div >
                        <img className="imagenModal rounded mx-auto d-block" src={data[numeroItem].url} ></img>
                    </div>
                    <div className="botoneraModal justify-content-center">
                        <div className="contornoModal justify-content-center">
                            <button className="botonModal" onClick={ () => handleDisminuir()}>
                                -
                            </button>
                            <p className= "numeroModal">{contador}</p>
                            <button className="botonModal" onClick={ () => handleAumentar()}>
                                +
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                        <Button className="botonCancelarModal" variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button className="botonComprarModal" variant="primary" onClick={ () => compro()}>
                            Agregar al carrito
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalProducto
