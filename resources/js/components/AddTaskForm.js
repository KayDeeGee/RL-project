import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTaskForm(props) {
    const [inputs, setInputs] = useState("");
    const [endDate, setEndDate] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

       function notifySuccess(msg) {
        toast.success(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function notifyWarning(msg) {
        toast.warn(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    useEffect(() => {
        // Set initial form values using the task data passed as props
        if (props.task) {
            setInputs(props.task.name);
            setEndDate(props.task.endDate);
            setEndTime(props.task.endTime);
        }
      }, [props.task]);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs, date, time)

        const data = {
            description: inputs,
            endDate: endDate,
            endTime: endTime,
        };
        
        if(props.task){
            
            axios.put('/updateItemRoute/' + props.task.id, data)
            .then((response) => {
                console.log(response.data);
                notifySuccess("Task updated successfully!");
            })
            .catch((error) => {
                console.error(error);
                notifyWarning("Error updating the task!");
            });
            props.onUpdate();
            props.onHide();
            
        } else {
            axios.post('/saveItemRoute', data)
            .then((response) => {
                console.log(response.data);
                notifySuccess("Task added successfully!");
            })
            .catch((error) => {
                console.error(error);
                notifyWarning("Error adding the task!");
            });
            props.onAdd();
            props.onHide();
        }
    };

    return (
        <form className="container mx-auto" onSubmit={handleSubmit}>
            <div className="m-1">
                <h5 className="mb-2">Enter Task Name:</h5>
                <input
                    className="w-100 form-control shadow-sm"
                    type="text"
                    name="username"
                    value={inputs}
                    onChange={(e) => setInputs(e.target.value)}
                />
        
                {/* end time */}
                <div className="row mt-4">
                    <div className="col-6">
                        <h5 className="mb-2">Enter End Date:</h5>
                        <input className="w-100 border-1 form-control shadow-sm" type="date" id="date" name="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                    </div>
                    <div className="col-6">
                        <h5 className="mb-2">Enter End Time:</h5>
                        <input className="w-100 border-1 form-control shadow-sm" type="time" id="time" name="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}></input>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                {props.task ? 
                    <button className=" mx-auto my-2 btn btn-border-secondary-custom" type="submit">
                       <h4 className='m-0'>Update Task!</h4>
                    </button> 
                    : <button className="mx-auto my-2 btn btn-border-secondary-custom" type="submit" >
                        <h4 className='m-0'>Create Task!</h4>
                    </button>
                }
                </div>
            </div>
        </form>
    );
}

export default AddTaskForm;
