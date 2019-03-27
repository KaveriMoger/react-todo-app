import React from 'react'
import Notifications from "./Notifications"
import TodoList from "../todos/TodoList"
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"


class Dashboard extends React.Component {
  render() {
   const { todos } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TodoList  todos={todos}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todo
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'todo'}
  ])
)(Dashboard)
