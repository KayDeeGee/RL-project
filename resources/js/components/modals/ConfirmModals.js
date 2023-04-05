import { Button, Modal } from "react-bootstrap";

function ConfirmModals(props) {
    return (
        <Modal
        
            {...props}
            size=""
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3 style={{ color: 'white' }}>Delete Task</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="container">
                <h5 className="d-flex justify-content-center">Are you sure you want to delete?</h5>
                <h5 className="d-flex justify-content-center" style={{ color:'#f4512c' }}>"{props.task.name}"</h5>
                <h5 className="d-flex justify-content-center mb-3">task?</h5>

                
                <div className="d-flex justify-content-center">
                    
                    {/* <button className="btn me-2" onClick={() => props.onDelete(props.task.id)}>Yes</button> */}
                    <button className="btn me-2 btn-solid-primary-custom" onClick={() => props.onDelete(props.task.id)}>
                        <h4 className='m-0'>Yes</h4>
                    </button>
                    <button type="button" className="btn btn-solid-secondary-custom" onClick={props.onHide}>
                        <h4 className='m-0'>No</h4>
                    </button>
                  
                </div> 
            </Modal.Body>
        </Modal>
     )
}

export default ConfirmModals;