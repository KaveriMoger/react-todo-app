import React from 'react'
import {connect} from "react-redux"
import { createTodo } from "../../store/actions/todoActions"

class CreateTodo extends React.Component {

  state = {
    title: '',
    age: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTodo(this.state)
  }


  render(){
    return(
      <div className="container">
        <form  className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Todo</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" id="age" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>

        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
