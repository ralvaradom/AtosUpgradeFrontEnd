import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import notesReducer from '../reducers/notesReducer';
import alertsReducer from '../reducers/alertsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReducer,
	alerts: alertsReducer
});

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

export default store;