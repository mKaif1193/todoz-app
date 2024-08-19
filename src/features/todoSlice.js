import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "TODOZ is Created By Kaif (@mkaif56)",
      text: "",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload !== "") {
        const todo = {
          id: nanoid(),
          text: action.payload,
          isCompleted: false,
        };
        state.todos.unshift(todo);
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos.find(
        (todo) =>
          todo.id === action.payload && (todo.isCompleted = !todo.isCompleted)
      );
    },
    getFromLS: (state) => {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      if (savedTodos && savedTodos.length > 0) {
        state.todos = savedTodos;
      }
    },
    setToLS: (state) => {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleComplete,
  getFromLS,
  setToLS,
} = todoSlice.actions;

export default todoSlice.reducer;
