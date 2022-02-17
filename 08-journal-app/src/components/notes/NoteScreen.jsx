import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';

import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

	const dispatch = useDispatch();

	const { active } = useSelector(state => state.notes);
	const [ formValues, handleInputChange, reset ] = useForm(active);

	const { body, title, id } = formValues;

	const activeId = useRef(active.id);

	const handleDelete = () => {
		dispatch(startDeleting(id));
	}

	useEffect(() => {
		if(active.id !== activeId.current) {
			reset(active);
			activeId.current = active.id;
		}
	}, [active, reset]);

	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues]);
	

	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
			<input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
					value={title}
					onChange={handleInputChange}
                />

				<textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
					value={body}
					onChange={handleInputChange}
                ></textarea>

				{
					(active.url) &&
					<div className="notes__image">
						<img 
							src={active.url}
							alt="imagen"
						/>
					</div>
				}
			</div>


			<button
				className="btn btn-danger"
				onClick={handleDelete}
			>
				Delete
			</button>

		</div>
	)
}

export default NoteScreen;