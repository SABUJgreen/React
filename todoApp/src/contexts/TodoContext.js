import { createContext, useContext } from "react";

// context object that we can use to share data across components without having to pass props down manually at every level.
export const TodoContext = createContext({
    // values
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // methods
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) //its a context object that we can use to share data across components without having to pass props down manually at every level.

export  const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider