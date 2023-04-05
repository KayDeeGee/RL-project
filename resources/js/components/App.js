import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Header from './Header'
import Tasks from './Tasks'
import axios from 'axios';
import { useState } from 'react';
import BotButtons from './BotButtons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
   const [tasks, setTasks] = useState([])

    const fetchData = () => {
        return axios.get('/getItemAllRoute')
                    .then((response) => setTasks(response.data));
    }

    useEffect(()=>{
        fetchData();
    },[]);

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

    function deleteTask(taskId) {
        axios.delete(`/deleteItemRoute/${taskId}`)
            .then(response => {
                console.log('Task deleted successfully');
                // perform additional actions if required
                const updatedTasks = tasks.filter(task => task.id !== taskId);
                setTasks(updatedTasks);
                notifySuccess('Task deleted successfully!');
            })
            .catch(error => {
                console.error('Error deleting task:', error);
                // perform error handling if required
                notifyWarning('Error deleting the task!')
            });
    }

    function markTask(taskId) {
        axios.put(`/crossItemRoute/${taskId}`)
            .then(response => {
                console.log('Task completed!');
                
                // perform additional actions if required
                const updatedTasks = tasks.map(task => {
                    if (task.id === taskId) {
                        task.is_complete = task.is_complete ? 0 : 1;
                        task.is_complete ? notifySuccess('Task completed!'): notifySuccess('Task has been undone!');;
                    }
                    return task;
                });
                setTasks(updatedTasks);
            })
            .catch(error => {
                console.error('Error updating task:', error);
                notifyWarning('Error completing the task!')
        });
    }

    function markAll() {
        axios.put('/completeAllRoute')
            .then((response) => {
                console.log(response.data);
                fetchData();
                notifySuccess('All tasks completed!');
            })
            .catch((error) => {
                console.error(error);
                notifyWarning('Error completing all the tasks!');
            });
    }

    function deleteAll() {
        axios.delete('/deleteAllRoute')
            .then((response) => {
                console.log(response.data);
                fetchData();
                notifySuccess('All tasks deleted!');
            })
            .catch((error) => {
                console.error(error);
                notifyWarning('Errord deleting all the tasks!');
            });
    }

    return (
        <div className="container mx-auto">
            <div className="row mx-auto">
                <div className="col-6 inner-box bg-white justify-content-center border rounded shadow p-3 mx-auto">
                    <Header onAdd={fetchData}/>
                    <ColoredLine className="m-1" color="#808080"/>
                    {tasks.length > 0 ? <Tasks tasks={tasks} onUpdate={fetchData} onDelete={deleteTask} onToggle={markTask}/>
                        :<h1 className='d-flex justify-content-center'>
                            Nothing to do Wohoo!
                        </h1> }
                    <ColoredLine className="m-1" color="#808080"/>
                    <BotButtons onMarkAll={markAll} onDeleteAll={deleteAll}/>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}



const ColoredLine = ({ color }) => (
    <hr
        style={{
            background: color,
            color: color,
            height: '3px'
        }}
    />
);

export default App;
