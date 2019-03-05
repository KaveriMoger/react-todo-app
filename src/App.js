import React, { Component, } from "react";
import "./App.css";
import Person from "./Person/Person"
import DataList from "./DataList"
import data from "./data"

class App extends Component {
constructor(){
	super();
	this.state = { 
	   name: "",
	   age: "",
     }
	 this.addEntry = this.addEntry.bind(this)
	 this.add = this.add.bind(this)
}

addEntry (event) {
	const {name, value} = event.target
	this.setState({
		[name]: value
	});
};

add() {
    let newArr = data
	newArr.push({
	  name: this.state.name,
	  age:this.state.age
	})
	this.setState({
	  data:newArr
	})
};

 render() {
    return (
     <div className="App">
      <h1>hello,this is react app</h1>
	 {data.map(entry => <DataList name={entry.name} age={entry.age} />)}
	 <br />
	 <h1>To add new Item</h1>
	 <input type="text" name="name" placeholder="name" onChange={this.addEntry} value={this.state.name}/>
	 <input type="text" name="age" placeholder="age" onChange={this.addEntry} value={this.state.age}/>
	 <button onClick={this.add}>Add</button>
      </div>
    );
 }
}

export default App;


