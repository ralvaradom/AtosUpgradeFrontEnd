import React from 'react';

const AboutScreen = () => {

	const { user } = useContext(UserContext);

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr />

			<pre>
				{user.name}
			</pre>
		</div>
	);
};

export default AboutScreen;
