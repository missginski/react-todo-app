import React from 'react';
import TaskList from './TaskList';

class InputBox extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	getNewItem(e) {
		e.preventDefault();
		let newItem = document.getElementById('add-item-field').value;
		console.log(newItem);
		// this.setState({ content: this.state})
		return newItem;
	};

	render() {
		return (
			<div>
				<label htmlFor="todoItem">
					Enter an item to add it to the list:
					<input id="add-item-field" name="todoItem" type="text" />
				</label>
				<button
					onClick={ this.getNewItem } >
					Add Item
				</button>
				<TaskList
					content={this.state.content}	/>
			</div>
		);
	}
}

export default InputBox;
