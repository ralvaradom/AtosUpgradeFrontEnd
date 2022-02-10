import React, { useEffect, useState } from 'react';

const Message = () => {

	const [ coords, setCoords ] = useState({x:0, y:0});

	useEffect(() => {

		const mouseMove = (e) => {
			const coords = {x: e.x, y: e.y};
			setCoords(coords);
		}

		window.addEventListener('mousemove', mouseMove);

		console.log('componente montado');

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		}
	});

	return (
		<>
			<h3>Eres genial</h3>
			<p>
				x: {coords.x} y: {coords.y}
			</p>
		</>
	);
};

export default Message;
