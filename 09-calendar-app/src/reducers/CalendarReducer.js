import moment from 'moment';
import { types } from '../types/types';

const initialState = {
	events: [{
		id: new Date().getTime(),
		title: 'cumpleaños del jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar el pastel',
		user: {
			_id: '123',
			name: 'Fernando'
		}
	}],
	activeEvent: null,
}

const CalendarReducer = (state=initialState, action) => {
	switch(action.type) {
		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload
			}

		case types.eventAddNew:
			return {
				...state,
				events: [
					...state.events,
					action.payload
				]
			}

		case types.eventUpdate:
			return {
				...state,
				events: state.events.map(
					e => (e.id === action.payload.id) ? action.payload : e
				)
			}

		case types.eventDelete:
			return {
				...state,
				events: state.events.filter(
					e => e.id !== state.activeEvent.id
				),
				activeEvent: null
			}
		

		default:
			return state;
	}
}

export default CalendarReducer;