import './TaskList.css';

import TaskItem from '../task-item/TaskItem';

import { useSelector } from 'react-redux';

function TaskList() {
  const tasks = useSelector(rootState => rootState.tasks.tasks);
  
  return (
    <div className='task-list'>
      {
        tasks.map(task => <TaskItem key={task.id} task={task}/>)
      }
    </div>
  )
}

export default TaskList;