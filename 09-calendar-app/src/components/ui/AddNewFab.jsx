import React from 'react';
import { useDispatch } from 'react-redux';
import { eventSetActive } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {

	const dispatch = useDispatch();

	const handleClickView = () => {
		dispatch(uiOpenModal());
		dispatch(eventSetActive(null));
	}

	return (
		<button
			className="btn btn-primary fab"
			onClick={handleClickView}
		>
			<i className="fas fa-plus"></i>
		</button>
	)
}

export default AddNewFab;