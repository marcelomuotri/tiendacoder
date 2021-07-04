import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context/DataProvider'
import { Modal, Button } from 'react-bootstrap'
import './modalProducto.css'
import carroBlanco from '../../../../assets/tienda/carroblanco.png'


const ModalProducto = () => {
    //context
    const value = useContext(DataContext);
    const [show, setShow] = value.show
    const [numeroItem, setNumeroItem] = value.numeroItem
    const [detalle, setDetalle] = value.detalle
    const [subtotal, setSubtotal] = value.subtotal
    const compro = value.compro
    const data = value.data
 


    //context

    useEffect(() => {

        setSubtotal(1 * detalle.precio)

    }, [detalle.precio])


    const handleClose = () => setShow(false);


    return (
        <div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="tituloModal justify-content-center">
                    <Modal.Title >AGREGAR AL CARRITO</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div >
                        <img alt="modal" className="imagenModal rounded mx-auto d-block" src={data[numeroItem].url} ></img>
                    </div>
                    <div className="botoneraModal justify-content-center">
                        <p className="tituloProducto"> {data[numeroItem].titulo} </p>
                        <p className="tituloPrecio">${data[numeroItem].precio}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="botonesComprarCancelar">
                        <Button className="botonCancelarModal" variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <div className="botonComprarModal">
                            <a className="texto" onClick={() => compro(numeroItem)} > AGREGAR </a>
                            <img className="icono3" src={carroBlanco} alt="auto"></img>
                        </div>

                    </div>


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalProducto
