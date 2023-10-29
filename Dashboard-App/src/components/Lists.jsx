import React, { useState } from 'react';
import Card from './cards';

function List() {
  const [taskCards, setTaskCards] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

  const addTaskCard = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.title) {
      const newCard = {
        id: Date.now(),
        ...newTask,
        completed: false,
      };

      setTaskCards([...taskCards, newCard]);
      setNewTask({ title: '', description: '', dueDate: '' });
      setIsFormVisible(false);
    }
  };

  return (
    <>
      <div>
        <div className="List">
          <h2>To Do</h2>
          <button id="taskButton" className="taskButton" onClick={addTaskCard}>Add</button>
        </div>
        <ul>
          {taskCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
        {isFormVisible && (
          <form onSubmit={handleFormSubmit}>
       
            <input
            className='textarea'
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              
              required
            />
            <textarea
            className='textarea'
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              required
            />
        
            <input type="date" className="taskButton"  value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
            <button className="taskButton" type="submit">Add Task</button>
          </form>
        )}
      </div>
    </>
  );
}

export default List;
