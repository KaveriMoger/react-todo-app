import React, { Component, } from 'react';
import './App.css';
import Person from './Person/Person'
import DataList from './DataList'
import data from './data'


class App extends Component {
state = { 
	name: "",
	age: ""

}

 render() {
    return (
     <div className="App">
      <h1>hello,this is react app</h1>
	 {data.map(entry => <DataList key={entry.id} name={entry.name} age={entry.age} />)}
	 <h1>To add new Item</h1>
	 <input type="text" name="name" placeholder="name" onChange={this.inputChange} value={this.state.name}/>
	 <input type="text" name="age" placeholder="age" onChange={this.inputChange} value={this.state.age}/>
	 
      </div>
	  //React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'This is react app'))
    );
 }
  

}

export default App;


