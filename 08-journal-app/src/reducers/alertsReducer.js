import types from "../types/types";



const initialState = {
	alerts: []
}

const alertsReducer = (state=initialState, action) => {
	switch(action.type) {
		case types.alertsAddNew:
			return {
				alerts: [action.payload, ...state.alerts]
			}

		case types.alertsDelete:
			return {
				alerts: state.alerts.filter(alt => alt.id !== action.payload.id)
			}

		default:
			return state;
	}
}

export default alertsReducer;