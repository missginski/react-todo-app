import React from 'react';
import Heading from './components/Heading';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';

const App = () => {
	return (
		<div className="app">
			<Heading />
			<InputBox />
			<TaskList />
		</div>
	);
}

export default App;
