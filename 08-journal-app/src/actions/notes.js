import types from "../types/types";
import { db } from '../firebase/firebase-config';
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import { toast } from 'react-toastify';


export const startNewNote = () => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime()
		}

		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

		dispatch(activeNote(doc.id, newNote));
		dispatch(addNewNote(doc.id, newNote));
	}
}

export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	}
});

export const addNewNote = (id, note) => ({
	type: types.notesAddNew,
	payload: {
		id, ...note,
	}
})

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	}
}

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes
});

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if(!note.url) {
			delete note.url;
		}

		const noteToFirestore = {...note};
		delete noteToFirestore.id;

		await toast.promise(db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore),
		{
			success: 'Changes saved',
      		error: 'Unable to save changes'
		});

		dispatch(refreshNotes(note.id, noteToFirestore));
	}
}

export const refreshNotes = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		id,
		note : {
			id,
			...note
		}
	}
})

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active } = getState().notes;

		const fileUrl = await toast.promise(
			fileUpload(file),
			{
				pending: 'Uploading image',
      			error: 'Unable to upload image'
			}
		);
		active.url = fileUrl;

		dispatch(startSaveNote(active));
	}
}

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		await db.doc(`${uid}/journal/notes/${id}`).delete();
		dispatch(deleteNote(id));

		toast.success("Note deleted");

	}
}

export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id
})

export const notesLogout = () => ({
	type: types.notesLogoutCleaning
})