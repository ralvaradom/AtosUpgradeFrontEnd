import { useState } from "react";


const useCounter = (initialState=1, factor=1) => {
	const [ counter, setCounter ] = useState(initialState);

	const increment = () => {
		setCounter(counter+factor);
	}

	const decrement = () => {
		setCounter(counter-factor);	
	}

	const reset = () => {
		setCounter(initialState);
	}

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};

export default useCounter;
