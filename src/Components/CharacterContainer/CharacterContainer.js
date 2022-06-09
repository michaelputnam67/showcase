import './character-container.scss';
import Character from '../Character/Character';

export default function CharacterContainer ({characters}) {
	const renderCharacters = characters.map((character) => {
			return (
				<Character key={character.id} character={character} />
			)
		})
	
	return (
		<section className={'characters-container'}>
			{renderCharacters}
		</section>
	)
}