import React, { Component, } from "react";
import DataList from "./DataList.jsx"
import data from "./data"

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: "",
			data
		}
		this.addItem = this.addItem.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(event) {
		const {name, value} = event.target
			this.setState({
					[name]: value
		});
	}

	addItem() {
		const newArr = this.state.data;
		newArr.push({name: this.state.name, age: this.state.age})
		this.setState({
			data: newArr
		})
	}

	render() {
    return (
      <div className="App">
        <h1>hello,this is react app</h1>
        {this.state.data.map(entry => <DataList key={entry.id} name={entry.name} age={entry.age} />)}
<div className="List">
				<h1>To add new Item</h1>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={this.inputChange}
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={this.inputChange}
          value={this.state.age}
        />
        <button onClick={this.addItem}>Add to list</button>
				</div>

      </div>
    );
		}
}

export default App;
