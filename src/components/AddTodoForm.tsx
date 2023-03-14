import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
