import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp({ defaultCategories = [] }) {

	const [ categories, setCategories ] = useState(defaultCategories);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((item) => (
					<GifGrid
						key={item}
						category={item}
					/>
				))}
			</ol>
		</>
	);
}

export default GifExpertApp;