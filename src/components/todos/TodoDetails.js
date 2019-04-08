import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from "react-redux-firebase"
import { Redirect } from 'react-router-dom'

const TodoDetails = (props) => {
  const { todo,auth } = props
  if(!auth.uid) return <Redirect to='/signin' />
  if (todo) {
  return (
    <div className="container section todo-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{todo.title}</span>
          <p>{todo.age}</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
           <div>Posted By Kaveri</div>
           <div>19 March,2019</div>
        </div>
      </div>
    </div>

  )
} else {
  return (
     <div className="container center">
       <p>todo loading...</p>
    </div>
  )
 }
}

const mapStateToProps = (state,myProps) => {
  console.log(state)
  const id = myProps.match.params.id
  const todos = state.firestore.data.todo
  const todo = todos ? todos[id] : null
  return {
    todo: todo,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'todo'}
  ])
)(TodoDetails)
