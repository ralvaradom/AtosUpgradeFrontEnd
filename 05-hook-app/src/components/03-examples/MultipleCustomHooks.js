import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = () => {

	const { counter, increment } = useCounter();

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { author, quote } = !!data && data[0];
	
  	return (
		  <>
			<h1>BrakingBad Quotes</h1>
			<hr />

			{
				loading
					?
						(
							<div className="alert alert-info text-center">
								Loading...
							</div>
						)
					:
						(
							<blockquote className="blockquote text-right">
								<p class="mb-0">{quote}</p>
								<footer className="blockquote-footer">{author}</footer>
							</blockquote>
						)
			}

			<button className="btn btn-primary" onClick={increment}>
				Next quote
			</button>
		  </>
	  );
};

export default MultipleCustomHooks;
