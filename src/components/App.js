import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from './data';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setTasks(TASKS);
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== 'All')} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
