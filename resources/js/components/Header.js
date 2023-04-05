import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddTaskForm from "./AddTaskForm";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3 style={{ color: 'white' }}>Create new task</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddTaskForm  onAdd={props.onAdd} onHide={props.onHide}/>
            </Modal.Body>
        </Modal>
    );
}

function Header({ onAdd }) {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClose = () => {
        setShowModal(false);
      };
    return (
        <div className="d-flex justify-content-between">
            <h1 className="mr-auto">To do list</h1>
            <button className=" btn btn-lg my-btn" onClick={() => setModalShow(true)} >
                <i className="bi bi-plus-circle icon-btn"></i>
            </button>
            <MyVerticallyCenteredModal onAdd={onAdd} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}

export default Header;
