import types from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import { notesLogout } from "./notes";

export const startLoginEmailPassword = (email, password, setMsgError) => {
	return (dispatch) => {
		dispatch(startLoading());

		return firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				setMsgError(null);
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch(e => {
				dispatch(finishLoading());
				console.log(e.code);
				if(e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password')
					setMsgError('Email or password incorrect');
			});
	}
}

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	}
}

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());
		dispatch(notesLogout());
	}
}

export const startRegisterWithEmailAndPassword = (email, password, name) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({displayName: name});
				console.log(user);
				// dispatch(login(user.uid, user.displayName));
			})
			.catch(e => {
				console.log(e);
			});
	}
}

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});

export const logout = () => ({
	type: types.logout
});