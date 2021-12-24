import React, { Component } from 'react'

class CustomInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value : 'Input Pertama',
		};
		this.handleInput = this.handleInput.bind(this);
		this.textInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
	}

	handleInput(){
		this.setState({value:''});
		this.textInput.current.focus();
	}

	handleChange(e){
		this.setState({value: e.target.value})
	}

	render(){
		return(
			<div>
				<input type='text' value = {this.state.value} ref = {this.textInput} onChange={ (e) => this.handleChange(e)} />
				<button onClick = {this.handleInput}>Kirim</button>
			</div>
		);
	}
}

export default CustomInput;