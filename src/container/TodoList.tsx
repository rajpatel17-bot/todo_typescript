import React, { useContext } from "react";
import TodoListItem from "../components/TodoListItem";
import { TodoContext } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
