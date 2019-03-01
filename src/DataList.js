import React from "react"
import "./less/todo.less"

class DataList extends React.Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<div className="List">
			<h1>Name: {this.props.name}</h1>
			<h3>Age: {this.props.age}</h3>
			</div>
		 )
	}
}

export default DataList
