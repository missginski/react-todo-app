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

const TaskList = () => {
	posts = posts.map( (post) => (
		post =
		<li>
			{post.name}
			<label for="done">
				<input type="checkbox" for="done" />
				Done?
			</label>
		</li>
	));

	return (
		<ul>
			{ posts }
		</ul>
	);
}

export default TaskList;
