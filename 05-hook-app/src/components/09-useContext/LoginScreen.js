import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

	const { setUser } = useContext(UserContext);

	const [ username, setUsername ] = useState('');

	const handleInputChange = (e) => {
		setUsername(e.target.value);
	}

	return (
		<div>
			<h1>LoginScreen</h1>
			<hr />

			<input
				type="text"
				name="username"
				autoComplete="off"
				onChange={handleInputChange}
			>
			</input>

			<button
				className="btn btn-primary"
				onClick={ () => setUser({
					id: 123,
					name: username
				}) }
			>
				Login
			</button>

		</div>
	);
};

export default LoginScreen;
