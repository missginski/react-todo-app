import React from 'react';
import Heading from './components/Heading';
import InputBox from './components/InputBox';
// import TaskList from './components/TaskList';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Heading />
				<InputBox />
			</div>
		);
	}
};

export default App;
