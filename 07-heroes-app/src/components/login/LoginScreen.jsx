import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = () => {

	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		const action = {
			type: types.login,
			payload: { name: 'Fernando' }
		};

		dispatch(action);

		navigate('/marvel', {
			replace: true
		});
	}

	return (
		<div>
			<h1>Login</h1>
			<hr />

			<button
				className="btn btn-primary"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
