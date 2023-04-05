import { Button, Modal } from "react-bootstrap";

function AllActsModal(props) {
    return (
        <Modal
            {...props}
            size=""
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title>
                    Delete All Task
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className="container">
                {props.job === "complete" ? (
                    <>
                        <h3 className="d-flex justify-content-center m-3">Complete all tasks?</h3>
                        <div className="d-flex justify-content-center">
                            <button className="btn me-2 btn-solid-primary-custom" onClick={() => {props.onMarkAll(); props.onHide();}}>
                                <h4 className='m-0'>Yes</h4>
                            </button>
                            <button type="button" className="btn btn-solid-secondary-custom" onClick={props.onHide} >
                                <h4 className='m-0'>No</h4>
                            </button>
                        </div> 
                    </>
                ) : (
                    <>
                        <h3 className="d-flex justify-content-center m-3">Delete all tasks?</h3>
                        <div className="d-flex justify-content-center">
                            <button className="btn me-2 btn-solid-primary-custom" onClick={() => {props.onDeleteAll(); props.onHide();}}>
                                <h4 className='m-0'>Yes</h4>
                            </button>
                            <button type="button" className="btn btn-solid-secondary-custom" onClick={props.onHide}>
                                <h4 className='m-0'>No</h4>
                            </button>
                        </div> 
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default AllActsModal;
