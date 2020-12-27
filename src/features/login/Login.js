import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, selectUser} from './userSlice';
import './Login.css';

const Login = () => {
	const [username, setUsername] = useState(null);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	// console.log(user);

	return (
		<div className="login">
			<div>this is login page, please log in</div>
			<div>
				username : <input onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div>
				<button onClick={() => dispatch(login(username))}>login</button>
			</div>
		</div>
	);
};

export default Login;
