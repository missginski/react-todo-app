import React from 'react';

let posts = [{
	key: 1,
	name: 'brush hair'
},
	{
	key: 2,
	name: 'clean room'
},
	{
	key: 3,
	name: 'get in bed'
}];

const TaskList = (props) => {
	posts = posts.map( (post) => (
		post =
		<li id={ post.key } className="todo-item">
			{ post.name }
			<label htmlFor={ post.key }>
				<input type="checkbox" htmlFor="done" />
				Done?
			</label>
		</li>
	));

	return (
		<ul className="todo-list">
			{ posts }
		</ul>
	);
}

export default TaskList;
