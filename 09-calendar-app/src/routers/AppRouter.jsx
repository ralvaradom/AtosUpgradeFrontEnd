import React from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';


import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
	return (
		<div>
			
		<Router>

			<Routes>

				<Route path="/*" element={<CalendarScreen />} />
				<Route path="login" element={<LoginScreen />} />

			</Routes>

		</Router>

		</div>
	)
}

export default AppRouter