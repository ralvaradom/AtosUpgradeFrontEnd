import { combineReducers } from 'redux';
import CalendarReducer from './CalendarReducer';

import uiReducer from './uiReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	calendar: CalendarReducer,
});