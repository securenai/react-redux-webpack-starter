import React from 'react';
import About from './about';
import Contact from './contact';
import {Counter} from './features/counter/Counter';
import Login from './features/login/Login';
import {selectUser} from './features/login/userSlice';
import {useSelector} from 'react-redux';

const App = () => {
	const user = useSelector(selectUser);
	// console.log(user);
	return (
		<div>
			{user === 'sam' ? (
				<div>
					<h1>hello world!!!</h1>
					<About />
					<Contact />
					<Counter />
				</div>
			) : (
				<Login />
			)}
		</div>
	);
};

export default App;
