import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './store/store';

import 'react-toastify/dist/ReactToastify.css';

const JournalApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default JournalApp;