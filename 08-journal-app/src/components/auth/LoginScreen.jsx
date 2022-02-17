import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useForm  from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useState } from 'react';

const LoginScreen = () => {

	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.ui);

	const [ msgError, setMsgError ] = useState(null);

	const [ formValues, handleInputChange ] = useForm({
		email: 'nando@gmail.com',
		password: '123456'
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(startLoginEmailPassword(email, password, setMsgError));
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	}

	return (
		<div>
			<h3 className="auth__title">Login</h3>
			
			<form onSubmit={handleLogin}>

				{
					msgError && 
					<div className="auth__alert-error">
						{msgError}
					</div>
				}

				<input 
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input 
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-primary mt-1"
					disabled={loading}
				>
					Login
				</button>

				<div className="auth__social-networks">
					<small><i>Login with social networks</i></small>
					<hr />
					<div 
						className="google-btn"
						onClick={handleGoogleLogin}
					>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register">
					<small>Create new account</small>
				</Link>

			</form>
		</div>
	)
}

export default LoginScreen;