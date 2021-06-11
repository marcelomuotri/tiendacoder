import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {DataContext} from '../../../context/DataProvider'
import {useContext} from 'react'

const ModalRepetido = () => {

    const value = useContext(DataContext);

    const[alertRepetido, setAlertRepetido] = value.alertRepetido

    const handleModalRepetido = () =>   setAlertRepetido(false)
      
   

    return (
        <div>
            
      <Modal show={alertRepetido} onHide={handleModalRepetido}>
        
        <Modal.Body>Ese producto ya se encuentra en el carrito</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalRepetido}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModalRepetido
