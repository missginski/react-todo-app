import React from 'react';

// let posts = [{
// 	key: 1,
// 	name: 'brush hair'
// },
// 	{
// 	key: 2,
// 	name: 'clean room'
// },
// 	{
// 	key: 3,
// 	name: 'get in bed'
// }];

let posts = ['brush hair', 'clean room', 'get in bed']

class TaskList extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			content: this.props.conent
		};
	}

	posts = posts.map( (post) => (
		post =
		<li className="todo-item">
			{ post }
			<label>
				<input type="checkbox" htmlFor="done" />
				Done?
			</label>
		</li>
	));

	render() {
		return (
			<ul className="todo-list">
				{ this.state.content }
			</ul>
		);
	}
}

export default TaskList;
