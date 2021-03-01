import React, { useContext } from "react";
import TodosContext from '../content'

export default function TodoList() {
  const {state, dispatch} = useContext(TodosContext)

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}