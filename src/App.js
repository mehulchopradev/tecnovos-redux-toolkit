import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import TaskApp from './app/components/task-app/TaskApp';

function App() {
  return (
    <div className="App">
      <TaskApp/>
    </div>
  );
}

export default App;
