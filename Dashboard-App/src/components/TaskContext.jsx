
import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  taskLists: [],
};


const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK_LIST':
      return {
        ...state,
        taskLists: [...state.taskLists, { id: action.payload.id, title: action.payload.title, cards: [] }],
      };
    case 'ADD_TASK_CARD':
      return {
        ...state,
        taskLists: state.taskLists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, cards: [...list.cards, { id: action.payload.cardId, title: action.payload.title, description: action.payload.description, dueDate: action.payload.dueDate }] }
            : list
        ),
      };
  
    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

function useTask() {
  return useContext(TaskContext);
}

export { TaskProvider, useTask };
