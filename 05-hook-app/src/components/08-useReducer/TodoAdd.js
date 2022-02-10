import React from 'react';
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

	const [ { description }, handleInputChange, reset ] = useForm({
		description: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if(description.trim().length <= 1)
			return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		}

		handleAddTodo(newTodo);
		reset(); 
	}

	return (
		<>
		<h4>Agregar</h4>
		<hr />

		<form onSubmit={handleSubmit}>
			<input 
				type="text"
				className="form-control"
				name="description"
				onChange={handleInputChange}
				placeholder="Aprender ..."
				value={description}
				autoComplete="off"
			/>

			<button
				className="btn btn-outline-primary mt-1 w-100"
			>
				Agregar
			</button>
		</form>
		</>
	);
};

export default TodoAdd;
