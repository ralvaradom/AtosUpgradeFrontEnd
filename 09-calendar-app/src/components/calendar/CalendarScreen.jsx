import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

import { messages } from '../../helpers/calendar-messages-es';
import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFap from '../ui/DeleteEventFap';


moment.locale('es');
const localizer = momentLocalizer(moment);

const myEventList = [{
	title: 'cumpleaños del jefe',
	start: moment().toDate(),
	end: moment().add(2, 'hours').toDate(),
	bgcolor: '#fafafa',
	notes: 'Comprar el pastel',
	user: {
		_id: '123',
		name: 'Fernando'
	}
}]

const CalendarScreen = () => {

	const dispatch = useDispatch();	
	const { events, activeEvent } = useSelector(state => state.calendar);

	const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month');

	const onDoubleClick = (e) => {
		dispatch(uiOpenModal());
	}

	const onSelect = (e) => {
		console.log(e);
		dispatch(eventSetActive(e));
	}

	const onView = (e) => {
		setLastView(e);
		localStorage.setItem('lastView', e);
	}

	const SelectSlot = (e) => {
		dispatch(eventSetActive(null));
	}

	const eventStyleGetter = (event, start, end, isSelected) => {
		return {
			style: {
				backgroundColor: '#367cf7',
				borderRadius: '0px',
				opacity: 0.8,
				display: 'block',
				color: 'white'
			}
		}
	}

	return (
		<div className="calendar-screen">
			<Navbar />

			<Calendar 
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onView}
				onSelectSlot={SelectSlot}
				selectable={true}
				view={lastView}
				components={{
					event: CalendarEvent
				}}
			/>

			<CalendarModal />
			{ (activeEvent) && <DeleteEventFap /> }

			<AddNewFab />

		</div>

	)
}

export default CalendarScreen