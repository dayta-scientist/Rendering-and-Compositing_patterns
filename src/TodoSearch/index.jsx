import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

	const onSearchValueChange = event => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className='TodoSearch'
			placeholder='Search one to-do'
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}

export { TodoSearch };
