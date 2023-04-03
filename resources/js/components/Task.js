const Task = ({ task }) => {
    return (
        <div className="row border mx-1 my-2 border border-white border-2 ">
            <h5 className="col-8 m-auto ps-3" style={{ textDecoration: 'line-through' }}>{task.name}</h5>
            

        </div>
    )
  }
  
  export default Task