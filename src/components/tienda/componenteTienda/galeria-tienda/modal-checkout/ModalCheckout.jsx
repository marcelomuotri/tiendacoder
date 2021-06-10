import React from 'react'
import './ModalCheckout.css'






const ModalCheckout = () => {

   
        const [show, setShow] = useState(false);
    
        const handleMostrarCheckout = () => setShow(false);
        const handleOcultarCheckout = () => setShow(true);

    return (
        <div>

                <>
                <Button variant="primary" onClick={handleMostrarCheckout}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleOcultarCheckout}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleOcultarCheckout}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleOcultarCheckout}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                </>
           

        </div>
         );
    
}

export default ModalCheckout
