import React from 'react';
import About from './about';
import Contact from './contact';
import {Counter} from './features/counter/Counter';

const App = () => {
	return (
		<div>
			<h1>hello world!!!</h1>
			<About />
			<Contact />
			<Counter />
		</div>
	);
};

export default App;
