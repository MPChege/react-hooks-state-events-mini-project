import React from 'react';

function Task({ task, onDeleteTask }) {
  return (
    <div>
      <span>{task.text} - {task.category}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
