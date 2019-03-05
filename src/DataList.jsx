import React from "react"
import Style from "./todo.less"

class DataList extends React.Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<div className={Style.list}>
			<h1>Name: {this.props.name}</h1>
			<h3>Age: {this.props.age}</h3>
			</div>
		 )
	}
}

export default DataList
