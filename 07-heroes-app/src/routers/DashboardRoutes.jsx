import { Routes, Route } from 'react-router-dom';

import { Navbar } from "../components/ui/Navbar";

import DcScreen from '../components/dc/DcScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import HeroScreen from '../components/hero/HeroScreen';

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Routes>
					<Route exact path="marvel" element={<MarvelScreen />} />
					<Route exact path="dc" element={<DcScreen />} />
					<Route exact path="search" element={<SearchScreen />} />
					<Route exact path="hero/:heroId" element={<HeroScreen />} />

					<Route exact path="/" element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
};

export default DashboardRoutes;
