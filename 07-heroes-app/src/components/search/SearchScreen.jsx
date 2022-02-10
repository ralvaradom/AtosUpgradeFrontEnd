import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import getHeroesByName from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

	const navigate = useNavigate();
	const location = useLocation();
	
	const { q='' } = queryString.parse(location.search);

	const searchResult = useMemo(() => getHeroesByName(q), [q]); 

	const [formValues, handleInputChange] = useForm({
		searchText: q
	});

	const { searchText } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	}

  	return (
			<>
				<h1>Search</h1>
				<hr />

				<div className="row">

					<form onSubmit={handleSearch}>
						<input 
							type="text" 
							placeholder="hero" 
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={handleInputChange}
						/>

						<button 
							type="submit" 
							className="btn btn-outline-primary mt-2"
						>
							Search
						</button>
					</form>

					{
						(q !== '') &&
						<div className="col-7 mt-5 animate__animated animate__fadeIn">
							<h4>Results</h4>
							<hr />

							{
								searchResult.length === 0
								?
									<div className="alert alert-danger">Match not found</div>
								:
									searchResult.map(hero => (
										<HeroCard
											key={hero.id}
											{...hero}
										/>
									))
							}
						</div>

					}
				</div>
			</>
	  );
};

export default SearchScreen;
