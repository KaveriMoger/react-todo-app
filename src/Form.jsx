import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from "./js/actions/index";
import firebase from "./Firebase.js"

function mapDispatchToProps (dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      age: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event){
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit (event)  {
    event.preventDefault();
    const title = this.state.title;
    const age = this.state.age;
    const id = uuidv1();
    // firebase.database().ref('messages').push({
    //   title: title,
    //   age: age,
    //   id: id
    // });
    console.log(firebase.auth());
    // this.props.addArticle({
    //   title, id, age
    // });

    this.setState({
      title: "",
      age: ""
    })
  }

  render() {
    const title = this.state.title;
    const age  = this.state.age;
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Person Name</label>
        <input type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={this.handleChange}/>
      </div>

      <div className="form-group">
        <label>Age</label>
        <input type="text"
        className="form-control"
        id="age"
        value={age}
        onChange={this.handleChange}/>
      </div>
      <button type="submit" className="btn btn-success btn-lg">SAVE</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form
