import './home.scss';
import React, { useEffect, useState } from 'react'
import apiCalls from '../../apiCalls';
import CharacterContainer from '../CharacterContainer/CharacterContainer'

export default function Home() {
	const [favoriteCharacters, setfavoriteCharacters] = useState([])
	const [truck, setTruck] = useState()


	const getId = () => Math.floor(Math.random()* 225)

  useEffect(() => {
    apiCalls.getFavoriteCharacters().then((data) => {
      setfavoriteCharacters(data.characters)
    })

		apiCalls.getTruck(getId()).then((data) => setTruck(data))
  }, [])



	return (
		<section className="home">
			<h1>Bob's Burgers Auditorium</h1>
			{truck && <img className="pest-control-truck" src={truck.image} alt={truck.name}/>}

			{favoriteCharacters.length ? <div className="favorites-container">
				<h2>Here are some of your favorite characters!</h2>
				<CharacterContainer characters={favoriteCharacters} />
			</div> : ''}
			
		</section>
	)
}