import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventSetActive, eventUpdate } from '../../actions/events';

const customStyles = {
	content: {
		top: 			'50%',
		left: 			'50%',
		right: 			'auto',
		bottom: 		'auto',
		marginRigth: 	'-50%',
		transform: 	'translate(-50%, -50%)',
	}
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
	title: '',
	notes: '',
	start: now.toDate(),
	end: nowPlus1.toDate()
}

const CalendarModal = () => {

	const dispatch = useDispatch();

	const { modalOpen } = useSelector(state => state.ui);
	const { activeEvent } = useSelector(state => state.calendar);

	const [ formValues, setFormValues ] = useState(initEvent);
	const { notes, title, start, end } = formValues;

	useEffect(() => {
		setFormValues(activeEvent ? activeEvent : initEvent);
	}, [activeEvent, setFormValues]);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		})
	}
	
	const closeModal = () => {
		console.log('close modal');
		dispatch(uiCloseModal());
		setFormValues(initEvent);
	}

	const handleStartDateChange = (e) => {
		setFormValues({
			...formValues,
			start: e
		});
	}
	
	const handleEndDateChange = (e) => {
		setFormValues({
			...formValues,
			end: e
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);

		if(activeEvent) {
			dispatch(eventUpdate(formValues));
		}
		else {
			dispatch(eventAddNew({
				...formValues,
				id: new Date().getTime(),
				user: {
					name: 'Fernando'
				}
			}));
		}

		closeModal();
	}

	return (
		<Modal
			isOpen={modalOpen}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			className="modal"
			overlayClassName="modal-fondo"
		>
			
			<h1>
				{
					activeEvent 
						? activeEvent.title
						: "Nuevo evento"
				}	
			</h1>
			<hr />
			<form 
				className="container"
				onSubmit={handleSubmit}
			>

				<div className="form-group">
					<label>Fecha y hora inicio</label>
					<DateTimePicker
						onChange={handleStartDateChange}
						value={start}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<DateTimePicker
						onChange={handleEndDateChange}
						value={end}
						minDate={start}
						className="form-control"
					/>
				</div>

				<hr />
				<div className="form-group">
					<label>Titulo y notas</label>
					<input 
						type="text" 
						className="form-control"
						placeholder="Título del evento"
						name="title"
						required
						autoComplete="off"
						value={title}
						onChange={handleInputChange}
					/>
					<small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
				</div>

				<div className="form-group">
					<textarea 
						type="text" 
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
						required
						value={notes}
						onChange={handleInputChange}
					></textarea>
					<small id="emailHelp" className="form-text text-muted">Información adicional</small>
				</div>

				<button
					type="submit"
					className="btn btn-outline-primary btn-block"
				>
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>

			</form>
		</Modal>
	)
}

export default CalendarModal