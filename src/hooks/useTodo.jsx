import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (todoIndex, newTodo) => {
    if (newTodo) {
      const newTodos = todos.map((todo, index) =>
        index === todoIndex ? newTodo : todo,
      );
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setEditingTodo(null);
      setEditingIndex(null);
    } else {
      setEditingTodo(todos[todoIndex]);
      setEditingIndex(todoIndex);
    }
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    editingTodo,
    setEditingTodo,
    editingIndex,
    setEditingIndex,
  };
}
