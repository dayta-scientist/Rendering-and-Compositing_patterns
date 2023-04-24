import React from 'react';
import PersonalLogo from '../assets/GLR.dev.svg';
import "./Header.css"

function Header() {
	return (
		<div className='Header'>
			<img src={PersonalLogo} alt='Personal-Logo' />
		</div>
	);
}

export { Header };
