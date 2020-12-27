import React from 'react';
import {logout, selectUser} from '../features/login/userSlice';
import {useSelector, useDispatch} from 'react-redux';

const Header = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<div>
			<span>user : {user}</span>
			<button onClick={() => dispatch(logout())}>logout</button>
		</div>
	);
};

export default Header;
