import "./character-stats.scss";
import apiCalls from "../../apiCalls";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterStats() {
  const [character, setCharacter] = useState("");
  let { id } = useParams();

  useEffect(() => {
    apiCalls.getSingleCharacter(id).then((character) => {
      setCharacter(character);
    });
  }, []);

  return (
    <div className="character-stats-container">
      <section className="character-image-container">
        <h1>{character ? character.name : "character"}</h1>
				<div className="image-container">
        	<img src={character.image} alt={character.name} />
				</div>
      </section>
      <section className="character-info-container">
        <div className="character-info-container-1">
          <ul>
            <li>{character && character.gender}</li>
            <li>{character.occupation}</li>
						<li>{character.hairColor}</li>
            <li>{character.firstEpisode}</li>
						<li>{character.voicedBy}</li>
          </ul>
        </div>
        <div 
				className="character-info-container-2">
          <ul>
            <li>
              <a href={character.wikiUrl}>{`${character.name} Wiki Page`}</a>
							<button onClick={() => apiCalls.postCharacter(character)}>Favorite This Character</button><br></br>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
