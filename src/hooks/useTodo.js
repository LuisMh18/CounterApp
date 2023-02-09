import { todoReducer } from "../07-useReducer/todoReducer";
import { useEffect, useReducer } from "react";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos) || []);
      },[todos]);

      const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload:todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        // console.log("id: ", id);
        dispatch({
            type: '[TODO] Remove Todo',
            payload:id
        });
      }

      const handleToggleTodo = (id) => {
        // console.log("id: ", id);
        dispatch({
            type: '[TODO] Toggle Todo',
            payload:id
        });
      }

      const todosCount = () => {
        return todos.length;
      }

      const pendingTodosCount = () => {
        return todos.filter(value => !value.done ).length
      }

      //console.log("todosCount: ", todosCount);

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}