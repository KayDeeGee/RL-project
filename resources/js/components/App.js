import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Header from './Header'
import Tasks from './Tasks'
import axios from 'axios';
import { useState } from 'react';



function App() {
   const [tasks, setTasks] = useState([])

    const fetchData = () => {
        return axios.get('/getItemAllRoute')
                        .then((response) => setTasks(response.data));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="container mx-auto">
            <div className="row mx-auto">
                <div className="col-6 inner-box justify-content-center border border-5 p-3 mx-auto">
                    <Header />
                    <ColoredLine color="rgb(134, 112, 112)"/>
                    {tasks.length > 0 ? <Tasks tasks={tasks}/>:'No task to show' }
                </div>
            </div>
        </div>
    );
}



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

export default App;
