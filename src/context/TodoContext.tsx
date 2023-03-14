import { createContext } from "react";

interface TodoContextType {
    todos: Todo[],
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (selectedTodo: Todo) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {},
})
