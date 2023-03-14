import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
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
