import { useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuid } from 'uuid';

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

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

    const addTodo = (text: string) => {
        const newTodos = [...todos, { id: uuid(), text, complete: false }];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <TodoContext.Provider value={{todos, toggleTodo, addTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
