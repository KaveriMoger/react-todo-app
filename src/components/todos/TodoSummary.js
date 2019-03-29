import React from 'react'

const TodoSummary = ({todo}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{todo.title}</span>
        <p>Posted By Kaveri</p>
        <p className="grey-text">18th Mar,2019</p>
      </div>
    </div>
  )
}

export default TodoSummary
