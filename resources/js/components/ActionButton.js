import Modal from "react-bootstrap/Modal";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import ConfirmModals from "./modals/ConfirmModals.js"

function ActionButton({task, onUpdate, onDelete, onToggle}) {
    const [modalUpdateShow, setUpdateModalShow] = useState(false);
    const [modalConfirmShow, setModalConfirmShow] = useState(false);
 
    return (
        <div className="row">
            {/* Edit  */}
            <div className="col-4 my-2 g-1 p-0">
                <button className=" btn my-btn" onClick={() => setUpdateModalShow(true)}>
                    <i className="icon-btn bi bi-pencil-square"></i>
                </button>
                <MyVerticallyCenteredModal onUpdate={onUpdate} task={task} show={modalUpdateShow} onHide={() => setUpdateModalShow(false)}/>
            </div>
            {/* Delete */}
            <div className="col-4 my-2 g-1 p-0" >
                <button className="btn my-btn" onClick={() => setModalConfirmShow(true)}>
                    <i className="icon-btn bi bi-trash"></i>
                </button>
                {console.log(task)}
                <ConfirmModals task={task} show={modalConfirmShow}  onDelete={onDelete} onHide={() => setModalConfirmShow(false)}/>
            </div>
            {/* update task */}
            <div className="col-4 my-2 g-1 p-0">
            {task.is_complete ? (
                <button className="btn marked" onClick={() => onToggle(task.id)}>
                    <i className="icon-btn bi bi-check"></i>
                </button>
            ) : (
                <button className="btn my-btn" onClick={() => onToggle(task.id)}>
                    <i className="icon-btn bi bi-check"></i>
                </button>
            )}
              
            </div>
        </div>
     );
 }

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size=""
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3 style={{ color: 'white' }}>Update task</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddTaskForm {...props} />
            </Modal.Body>
        </Modal>
    );
}



export default ActionButton;
