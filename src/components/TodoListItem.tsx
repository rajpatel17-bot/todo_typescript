import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoContext } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>

      <div style={{ display: "inline", marginLeft: "10px" }}>
        <AiFillDelete
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </li>
  );
};

export default TodoListItem;
