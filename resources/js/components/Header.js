import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import AddTaskForm from "./AddTaskForm";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddTaskForm/>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

function Header() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="d-flex justify-content-between">
            <h1 className="mr-auto">To do list</h1>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Create New Task
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Header;
