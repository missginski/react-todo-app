import React from 'react';
import TaskList from './TaskList';

class InputBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		let inputVal = document.getElementById('add-item-field').value;
		if (inputVal !== '') {
			let newItem = {
				name: inputVal
			};
			this.setState((prevState) => {
				return {
					tasks: prevState.tasks.concat(newItem)
				};
			});
			this.inputVal = '';
		}
		console.log(this.state.tasks)
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<label htmlFor="todoItem">
						Enter an item:
						<input
							id="add-item-field"
							name="todoItem"
							type="text"
						/>
					</label>
					<button>Add Item</button>
				</form>
				<TaskList entries={ this.state.tasks } />
			</div>
		);
	}
};

export default InputBox;
