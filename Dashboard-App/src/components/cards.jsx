import React, { useState } from 'react';

function Card({ card }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCard, setUpdatedCard] = useState(card);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update the task card with the edited details
    // You can handle this according to your specific logic
    console.log('Updated Card:', updatedCard);

    setIsEditing(false);
  };

  return (
    <div className='Card'>
      {isEditing ? (
        <div>
          <input
            type="text"
            className='textarea'
            value={updatedCard.title}
            onChange={(e) => setUpdatedCard({ ...updatedCard, title: e.target.value })}
          />
          <textarea
           className='textarea'
            value={updatedCard.description}
            onChange={(e) => setUpdatedCard({ ...updatedCard, description: e.target.value })}
          />
          <input
            type="date"
            value={updatedCard.dueDate}
            onChange={(e) => setUpdatedCard({ ...updatedCard, dueDate: e.target.value })}
          />
          <button className='taskButton' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{updatedCard.title}</h3>
          <p>{updatedCard.description}</p>
          <p>Due Date: {updatedCard.dueDate}</p>
        </div>
      )}
      <button className="taskButton"onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Card;
