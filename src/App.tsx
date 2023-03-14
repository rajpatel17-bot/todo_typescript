import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { v4 as uuid } from 'uuid';

const initialTodos: Todo[] = [
  {
    id: uuid(),
    text: 'Learn TypeScript',
    complete: false,
  },
  {
    id: uuid(),
    text: 'Eat Food',
    complete: false,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const getTodo = localStorage.getItem('todos');
    const parseTodo = JSON.parse(getTodo!);
    setTodos(parseTodo);
  }, [])

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    })
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodos = [...todos, { id: uuid(), text, complete: false }];
    setTodos(newTodos);
    // this is for update the local storage. and we must have to write a 'newTodo' variable name here to get the updated values on the localstorage.
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const deleteTodo: DeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    // update the localstorage. must have to write the updated variable name 'newTodos'.
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
