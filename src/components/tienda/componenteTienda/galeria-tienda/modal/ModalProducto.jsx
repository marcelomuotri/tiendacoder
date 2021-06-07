import React, {useContext, useState} from 'react'
import {DataContext} from '../../../../context/DataProvider'
import {Modal, Button} from 'react-bootstrap'
import './modalProducto.css'

const ModalProducto = () => {
    //context
    const value = useContext(DataContext);
    const[show, setShow] = value.show
    const data = value.data
    //context

    const [contador, setContador] = useState(0)


    const handleClose = () => setShow(false);

    const handleDisminuir = () => {
        if(contador > 0){
        setContador(contador - 1)
        }
    }
    
    const handleAumentar = () => {
        setContador(contador + 1)
    }

    
    
    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="tituloModal justify-content-center">
                    <Modal.Title >AGREGAR AL CARRITO</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div >
                        <img className="imagenModal rounded mx-auto d-block" src='https://raw.githubusercontent.com/marcelomuotri/tiendacoder/main/src/assets/tienda/plantas/oreja-de-elefante.jpg'></img>
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
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Agregar al carrito
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalProducto
