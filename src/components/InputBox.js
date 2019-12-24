import React from 'react';

const InputBox = () => {
	return (
		<div>
			<label for="todo"></label>
			<input name="todo" type="text" />
			<button>Submit</button>
		</div>
	);
}

export default InputBox;
