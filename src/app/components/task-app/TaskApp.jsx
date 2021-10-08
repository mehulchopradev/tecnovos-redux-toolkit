import './TaskApp.css';

import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';

function TaskApp(props) {
  return (
    <div className='task-app'>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default TaskApp;