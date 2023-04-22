import React from 'react';
import './Footer.css';
import { SiPlatzi, SiTwitter, SiGithub } from 'react-icons/si';

function Footer() {
	return (
		<div className='Footer'>
			<a href='https://platzi.com/p/dayta.scientist/' target='__blank'>
				<SiPlatzi className='icon' />
				dayta.scientist
			</a>
			<a href='https://twitter.com/DaytaScientist' target='__blank'>
				<SiTwitter className='icon' />
				@DaytaScientist
			</a>
			<a href='https://github.com/dayta-scientist' target='__blank'>
				<SiGithub className='icon' />
				dayta-scientist
			</a>
		</div>
	);
}

export { Footer };
