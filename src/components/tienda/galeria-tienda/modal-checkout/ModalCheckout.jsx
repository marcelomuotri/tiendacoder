import React, {useState, useContext, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'
import {DataContext} from '../../../context/DataProvider'
import './ModalCheckOut.css'
import ItemCheckout from './prodcutosCheckout/ItemCheckout'

 
const ModalCheckout = () => {

    const value = useContext(DataContext);


    const [showCheckout, setShowCheckOut]= value.showCheckout
    const [numProducto, setNumProducto] = value.numProducto
    const [total, setTotal] = value.total

    const handleAumentar = value.handleAumentar
    const handleOcultarCheckout = value.handleOcultarCheckout


    
    
    useEffect( () =>{
		setNumProducto ( JSON.parse(localStorage.getItem('productos')) )
        
	},[])

    /* useEffect(() => {
        
        setSubtotal (numProducto.cantidad * detalle.precio)
        console.log(detalle.precio)
        
        
    }, [contador]) */


    const increase = (id) =>{
        
		numProducto.forEach(item =>{
			if(item.detalle.id === id){
				item.cantidad +=1;
                item.subtotal= item.cantidad * item.detalle.precio
                
			}
			setNumProducto([...numProducto])
		})

	}

    const reduce = (id) =>{
       
		numProducto.forEach(item =>{
			if(item.detalle.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
                item.subtotal= item.cantidad * item.detalle.precio
			}
			setNumProducto([...numProducto])
		})
	}

    const eliminarItem = (id) => {
                
        numProducto.forEach((item, index) => {
            if(item.detalle.id == id){
                numProducto.splice(index,1)
            }
        });
           setNumProducto([...numProducto])
    }
    

   
       
    return (
        <div >

                <>

                <Modal dialogClassName="modalCheckout"  show={showCheckout} onHide={handleOcultarCheckout}>
                    <Modal.Header closeButton>
                    <Modal.Title class="modalCheckout_titulo"> 
                    
                    <p><strong>MI CARRITO ({numProducto.length}) </strong> </p>
                    
                    </Modal.Title> {/* aca va a ir la cantidad total */}
                    </Modal.Header>
                    <Modal.Body> {numProducto.map((item) => (
                            <div key={item.detalle.id}  >
                                <ItemCheckout id={item.detalle.id} imagen= {item.detalle.url} titulo={item.detalle.titulo} precio={item.detalle.precio} subtotal={item.subtotal} cantidad={item.cantidad} aumentar={() => increase(item.detalle.id)}
                                reducir={() => reduce(item.detalle.id)} eliminarItem={ () =>eliminarItem (item.detalle.id)}   />
                            </div>
                            )
                            )
                            }
                    
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button variant="primary" onClick={handleOcultarCheckout}>
                        PAGAR ${total}
                    </Button>
                    </Modal.Footer>
                </Modal>
                </>
           
        </div>
         );
    
}

export default ModalCheckout
