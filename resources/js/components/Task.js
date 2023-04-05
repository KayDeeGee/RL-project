
import ActionButton from './ActionButton';
import { format } from 'date-fns';
import moment from 'moment';

const Task = ({ task, onUpdate, onDelete, onToggle }) => {

    const dateStr = task.end_date;
    const formattedDate = format(new Date(dateStr), 'MMMM do, yyyy');
    const timeStr= task.end_time;
    const formattedTime = moment(timeStr, 'HH:mm:ss:SSS').format('h:mm A');

    return (
        <div className="row mx-1 border rounded my-2 shadow-sm">
            <div className="col-8 my-auto ps-3">
                {task.is_complete ? 
                    <h5 className="align-middle" style={{ textDecoration: 'line-through' }}>{task.name}</h5>
                :   <h5 className="align-middle"> {task.name} </h5>
                }
                <p>{formattedDate} at {formattedTime}</p>
            </div>
           
            <div className="col-4">
                <ActionButton task={task} onUpdate={onUpdate} onToggle={onToggle} onDelete={onDelete}/>
            </div>

        </div>
    )
  }
  
  export default Task