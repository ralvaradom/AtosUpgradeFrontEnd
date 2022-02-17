import types from "../types/types"


export const addNewAlert = (text, variant='warning') => {
	return {
		type: types.alertsAddNew,
		payload: {
			text,
			variant,
			id: new Date().getTime(),
		}
	}
}

export const deleteAlert = (id) => {
	return {
		type: types.alertsDelete,
		payload: {
			id
		}
	}
}