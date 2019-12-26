import React from 'react';
import TaskList from './TaskList';

class InputBox extends React.Component {
	// function getNewItem() {
	// 	e.preventDefault();
	// 	let newItem = document.getElementById('add-item-field').value;
	// 	console.log(newItem);
	// 	return newItem;
	// };

	render() {
		return (
			<div>
				<label htmlFor="todoItem">
					Enter an item to add it to the list:
					<input id="add-item-field" name="todoItem" type="text" />
				</label>
				<button
					// onClick={ getNewItem }
					>
					Add Item
				</button>
				<TaskList />
			</div>
		);
	}
}

export default InputBox;
