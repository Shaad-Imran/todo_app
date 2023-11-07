import { createSlice } from "@reduxjs/toolkit";

// Function to retrieve initial todo list from local storage
const getInitialTodoList = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  return localTodoList ? JSON.parse(localTodoList) : [];
};

// Define the initial state of the todo slice
const initialState = {
  filterStatus: "all",
  todoList: getInitialTodoList(),
};

// Create a todo slice using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      // Add the new todo to the local state
      state.todoList.push(action.payload);

      // Update the todo list in local storage
      updateLocalStorageTodoList(state.todoList);
    },

    // Delete a todo by ID
    deleteTodo: (state, action) => {
      // Filter out the todo to be deleted
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );

      // Update the todo list in local storage
      updateLocalStorageTodoList(state.todoList);
    },

    // Update an existing todo
    updateTodo: (state, action) => {
      // Map and update the existing todo
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              status: action.payload.status,
            }
          : todo
      );

      // Update the todo list in local storage
      updateLocalStorageTodoList(state.todoList);
    },

    // Update the filter status
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

// Function to update the todo list in local storage
const updateLocalStorageTodoList = (todoList) => {
  window.localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Export the reducer and action creators
export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;
