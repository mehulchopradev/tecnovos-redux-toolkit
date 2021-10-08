import { useState } from "react";

import { useDispatch } from "react-redux";
import { newTask as newTaskAction } from "../../redux/tasks/tasksSlice";

function TaskForm() {
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { value }}) => {
    setNewTask(value); // re render
  };

  const handleClick = () => {
    setNewTask('');
  
    dispatch(newTaskAction({
      title: newTask
    }));
  };

  return (
    <div className='task-form'>
      <input type="text" value={newTask} placeholder="enter todo" onChange={handleChange}/>
      <button disabled={!newTask} onClick={handleClick}>Save</button>
    </div>
  )
}

export default TaskForm;