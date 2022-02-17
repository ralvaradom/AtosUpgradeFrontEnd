import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({ id, date, title, body, url }) => {

	const nodeDate = moment(date);
	const dispatch = useDispatch();

	const handleEntryClick = () => {
		dispatch(activeNote(id, {
			date, title, body, url
		}));
	}

	return (
		<div 
			className="journal__entry"
			onClick={handleEntryClick}
		>

			{
				url &&
				<div className="journal__entry-picture"
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,

					}}
				>
				</div>
			}

			<div className="journal__entry-body">
				<p className="journal__entry-title">
					{ title }
				</p>
				<p className="journal__entry-content">
					{ body }
				</p>
			</div>
			
			<div className="journal__entry-data-box">
				<span>{ nodeDate.format('dddd') }</span>
				<h4>{ nodeDate.format('Do') }</h4>
			</div>

		</div>
	)
}

export default JournalEntry