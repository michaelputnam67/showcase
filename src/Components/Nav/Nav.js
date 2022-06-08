import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss'

export default function Nav () {
	return (
		<nav>
			<img src={require('../../assets/burger.png')}  />
			<div className="buttonContainer">
				<button >About</button>
				<button >Characters</button>
				<button >Favorites</button>
			</div>
		</nav>
	)
}