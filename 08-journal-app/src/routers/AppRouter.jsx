import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { firebase } from "../firebase/firebase-config";
import { login, startGoogleLogin } from '../actions/auth';
import { useState } from 'react';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {

	const dispatch = useDispatch();

	const [ checking, setCheking ] = useState(true);

	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if(user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				dispatch(startLoadingNotes(user.uid));
			}
			else {
				setIsLoggedIn(false);
			}

			setCheking(false);
		});
	}, []);

	if(checking) return (
		<h4>Loading...</h4>
	)

	const journalScreen = isLoggedIn ? <JournalScreen /> : <Navigate to={"auth/login"} />;
	const authRouther = !isLoggedIn ? <AuthRouter /> : <Navigate to={"/"} />;

	return (
		<div>
			<Router>
				
				<Routes>

					
					<Route path="/" element={journalScreen} />
					<Route path="auth/*" element={authRouther} />

				</Routes>
			</Router>

		</div>
	)
}

export default AppRouter;