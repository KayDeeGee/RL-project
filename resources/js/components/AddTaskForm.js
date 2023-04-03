import { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";

function AddTaskForm() {
    const [inputs, setInputs] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs, date, time)

        const data = {
            description: inputs,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
        };
        
        axios.post('/saveItemRoute', data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        };

        


    return (
        <form className="container mx-auto" onSubmit={handleSubmit}>
            <div className="m-3">
                <label className="mb-2">Enter Task Name:</label>
                <input
                    className="w-100"
                    type="text"
                    name="username"
                    value={inputs}
                    onChange={(e) => setInputs(e.target.value)}
                />
                {/* start time */}
                <div className="row">
                    <div className="col-6">
                        <label className="mb-2">Enter Start Date:</label>
                        <input className="w-100" type="date" id="date" name="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
                    </div>
                    <div className="col-6">
                        <label className="mb-2">Enter Start Time:</label>
                        <input className="w-100" type="time" id="time" name="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}></input>
                    </div>
                </div>
                {/* end time */}
                <div className="row">
                    <div className="col-6">
                        <label className="mb-2">Enter End Date:</label>
                        <input className="w-100" type="date" id="date" name="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                    </div>
                    <div className="col-6">
                        <label className="mb-2">Enter End Time:</label>
                        <input className="w-100" type="time" id="time" name="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}></input>
                    </div>
                </div>
                
            </div>
           
            <button className=" mx-auto my-2 btn btn-primary" type="submit">
                Create Task!
            </button>
        </form>
    );
}

export default AddTaskForm;
