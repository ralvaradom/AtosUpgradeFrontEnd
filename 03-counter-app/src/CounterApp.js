import PropTypes from 'prop-types';
import { useState } from 'react';

function CounterApp({ value=10 }) {

	const [ counter, setCounter ] = useState(value);

	const increment = (e) => {
		setCounter(counter+1);
	}

	const substract = (e) => {
		setCounter(counter-1);
	}

	const reset = (e) => {
		setCounter(value);
	}

	return (
		<>
			<h1>CounterApp</h1> 
			<h2>{ counter }</h2>

			<button onClick={increment}>+1</button>
			<button onClick={reset}>rest</button>
			<button onClick={substract}>-1</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number
}

export default CounterApp;