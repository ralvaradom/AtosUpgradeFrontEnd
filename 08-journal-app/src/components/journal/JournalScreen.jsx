import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import NoteScreen from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import Sidebar from './Sidebar';


const JournalScreen = () => {

	const { active } = useSelector(state => state.notes);
	const { alerts } = useSelector(state => state.alerts);

	console.log(alerts);

	return (
		<div className="journal__main-content">
			<Sidebar />
			

			<main>
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

				{
                    ( active )
                        ? ( <NoteScreen /> )
                        : ( <NothingSelected /> )
                }
			</main>
		</div>
	)
}

export default JournalScreen