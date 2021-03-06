import React from 'react'
import TodoSummary from "./TodoSummary"
import {Link} from "react-router-dom"

const TodoList = ({todos}) => {
  return (
    <div className="project-list section">
    {todos && todos.map(todo => {
      return(
        <Link to = {"/todos/" + todo.id} key={todo.id}>
          <TodoSummary todo={todo} key={todo.id} />
        </Link>
      )
    })}
    </div>
  )
}

export default TodoList
