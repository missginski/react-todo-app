import React from 'react';

// const oldTasks = [{
// 	key: 1,
// 	name: 'brush hair'
// },
// 	{
// 	key: 2,
// 	name: 'clean room'
// },
// 	{
// 	key: 3,
// 	name: 'go to bed'
// }];

class TaskList extends React.Component {
	createTasks(task) {
		return (
			<li className="todo-item">
				{ task.name }
				<label>
					<input type="checkbox" htmlFor="done" />
					Done?
				</label>
			</li>
		)
	}
	render() {
		let listEntries = this.props.entries;
		let listItems = listEntries.map(this.createTasks);

		return (
			<ul className="todo-list">
				{ listItems }
			</ul>
		);
	}
};

export default TaskList;
