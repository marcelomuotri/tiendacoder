import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from '../../../context/DataProvider'
import {Modal, Button} from 'react-bootstrap'
import './modalProducto.css'


const ModalProducto = () => {
    //context
    const value = useContext(DataContext);
    const [show, setShow] = value.show
    const [numeroItem, setNumeroItem] = value.numeroItem
    const [detalle, setDetalle] = value.detalle
    const [subtotal, setSubtotal] = value.subtotal
    const data = value.data
    const compro = value.compro
    
    
    //context

    useEffect(() => {
        
        setSubtotal (1 * detalle.precio)
        
    }, [detalle.precio])


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
                        <p> {data[numeroItem].titulo} </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                        <Button className="botonCancelarModal" variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button className="botonComprarModal" variant="primary" onClick={ () => compro(numeroItem)}>
                            Agregar al carrito
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalProducto
