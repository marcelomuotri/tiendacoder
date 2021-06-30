import React, { useContext, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { DataContext } from '../../../context/DataProvider'
import './ModalCheckOut.css'
import ItemCheckout from './prodcutosCheckout/ItemCheckout'
import cerrargrande from '../../../../assets/tienda/modalcarrito/cerrargrande.png'

import { db } from '../../../../firebase'


const ModalCheckout = (props) => {

    //context
    const value = useContext(DataContext);

    const [showCheckout, setShowCheckOut] = value.showCheckout
    const [numProducto, setNumProducto] = value.numProducto
    const [total, setTotal] = value.total
    const [cantidadTotal, setCantidadTotal] = value.cantidadTotal
    const handleOcultarCheckout = value.handleOcultarCheckout
    //context

    

    React.useEffect(async () => {// aca estoy cargando el numProducto a la cuenta del usuario, y cada vez que cambie numProducto, esto se actualiza

        if (props.firebaseUser !== null) {
            await db.collection(props.firebaseUser.uid).doc(props.firebaseUser.email).set({
                titulo: numProducto

            })
        }
    }, [numProducto])

    useEffect(() => {
        setNumProducto(JSON.parse(localStorage.getItem('productos')))

    }, []) //levanta los productos del storage y los pone en numProducto

    useEffect(() => {
        var numero = 0
        if (numProducto.length >= 1) {
            for (let i = 0; i < numProducto.length; i++) {
                 numero = + numProducto[i].cantidad + numero
                setCantidadTotal(numero)
            } 
            
            }else{
                setCantidadTotal(0) // volver el contador a 0

        } //esto actualiza la cantidad de articulos de un mismo item

    }, [numProducto])

    const increase = (id) => { //aumenta en 1 la cantidad

        numProducto.forEach(item => {
            if (item.detalle.id === id) {
                item.cantidad += 1;
                item.subtotal = item.cantidad * item.detalle.precio
            }
            setNumProducto([...numProducto])
        })
    }

    const reduce = (id) => {

        numProducto.forEach(item => { //baja la cantidad en 1 
            if (item.detalle.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
                item.subtotal = item.cantidad * item.detalle.precio
            }
            setNumProducto([...numProducto])
        })
    }

    const eliminarItem = (id) => {

        numProducto.forEach((item, index) => {
            if (item.detalle.id == id) {
                numProducto.splice(index, 1) //elimina 1 desde el indice index
            }
        });
        setNumProducto([...numProducto])
    }

    return (
        <div >

            <>

                <Modal dialogClassName="modalCheckout" show={showCheckout} onHide={handleOcultarCheckout}>
                    <Modal.Header >

                        <Modal.Title class="modalCheckout_titulo">

                            <p>Tu Carrito ({cantidadTotal}) </p>
                            <img onClick={handleOcultarCheckout} className="cerrargrande" src={cerrargrande}></img>

                        </Modal.Title> {/* aca va a ir la cantidad total */}

                    </Modal.Header>
                    <Modal.Body> {numProducto.map((item) => (
                        <div key={item.detalle.id}  >
                            <ItemCheckout id={item.detalle.id} imagen={item.detalle.url} titulo={item.detalle.titulo} precio={item.detalle.precio} subtotal={item.subtotal} cantidad={item.cantidad} aumentar={() => increase(item.detalle.id)}
                                reducir={() => reduce(item.detalle.id)} eliminarItem={() => eliminarItem(item.detalle.id)} />
                        </div>
                    )
                    )
                    }

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="container">
                            <div className="PrecioEnvio">
                                <p>Envio</p>
                                <p>$0</p>
                            </div>
                            <div className="PrecioEnvio">
                                <p>Total</p>
                                <p>${total}</p>
                            </div>
                            <Button variant="primary" className="pagar" onClick={handleOcultarCheckout}>
                                PAGAR
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>

        </div>
    );

}

export default ModalCheckout
