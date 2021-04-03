import React, { useState, useEffect, useContext } from "react";
import TodosContext from "../context";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    } else {
      setTodo("")
    }
  }, [currentTodo.id])

  const handleSubmit = async event => {
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo })
    }
    else {
      const response = await axios.post

      ('https://hooks-api-imaxwelll.vercel.app/todos', {
        id: uuidv4(),
        text: todo,
        complete: false
      })
      dispatch({ type: "ADD_TODO", payload: response.data });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
        >
      
      </input>
    </form>
  )
}