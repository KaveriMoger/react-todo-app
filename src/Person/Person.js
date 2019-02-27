import React from 'react'

const person = (props) =>  {
	return(
	<div>
	<h1 onClick={props.click}>I am a {props.name}! and I am {props.age}years old</h1>
	<h2>{props.children}</h2>
	<input type="text" onChange={props.change} value = {props.name}/>
	</div>
	)
}

export default person