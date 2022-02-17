import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

const RegisterScreen = () => {

	const dispatch = useDispatch();
	const { msgError } = useSelector(state => state.ui);

	const [ formValues, handleInputchange ] = useForm({
		name: 'Hernando',
		email: 'nando@gmail.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;
	
	const handleRegister = (e) => {
		e.preventDefault();
		
		if(!isFormValid()) {
			return;
		}

		dispatch(startRegisterWithEmailAndPassword(email, password, name));
	}

	const isFormValid = () => {

		if(name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		}
		if(email.trim().length === 0) {
			dispatch(setError('Email is required'));
			return false;
		}
		if(password.trim().length < 6) {
			dispatch(setError('Password must have at leas 6 characters'));
			return false;
		}
		if(password2.trim() !== password.trim()) {
			dispatch(setError('Confirmation is required'));
			return false;
		}


		dispatch(removeError());
		return true;
	}

	return (
		<div>
			<h3 className="auth__title">Register</h3>
			
			<form onSubmit={handleRegister}>

				{
					msgError && 
					<div className="auth__alert-error">
						{msgError}
					</div>
				}

				<input 
					type="text"
					placeholder="Name"
					name="name"
					value={name}
					className="auth__input"
					autoComplete="off"
					onChange={handleInputchange}

				/>

				<input 
					type="text"
					placeholder="Email"
					name="email"
					value={email}
					className="auth__input"
					autoComplete="off"
					onChange={handleInputchange}
				/>

				<input 
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					className="auth__input"
					onChange={handleInputchange}
				/>

				<input 
					type="password"
					placeholder="Confirm"
					name="password2"
					value={password2}
					className="auth__input"
					onChange={handleInputchange}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block mb-5 mt-2"
				>
					Sing in
				</button>

				<Link to="/auth/login">
					<small>Already have an account</small>
				</Link>

			</form>
		</div>
	)
}

export default RegisterScreen