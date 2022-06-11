import "./character.scss";
import { Link } from 'react-router-dom';

export default function Character({ character }) {

  return (
    <Link 
      to={`/character/${character.id}`}
      
    >
    <section className="character" id={character.id}>
      <h2>{character.name}</h2>
      <div>
        <p>{character.voicedBy}</p>
        <p>{character.firstEpisode}</p>
      </div>
      <img src={character.image}></img>
    </section>
    </Link>
  );
}
