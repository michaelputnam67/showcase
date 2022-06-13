import "./character-stats.scss";
import apiCalls from "../../apiCalls";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterStats() {
  const [character, setCharacter] = useState("");
  const [favorited, setFavorited] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    apiCalls.getFavoriteCharacters().then((data) => {
      setFavorites(data);
    });
  }, []);

  let { id } = useParams();

  useEffect(() => {
    if (!favorites.characters) {
      return setFavorited(false);
    }
    if (
      favorites.characters.some((favorite) => {
        return favorite.id === Number(id);
      })
    ) {
      setFavorited(true);
    }
  }, [favorites, id]);

  useEffect(() => {
    apiCalls.getSingleCharacter(id).then((data) => {
      setCharacter(data);
    });
  }, [id]);

  return (
    <div className="character-stats-container">
      <section className="character-info-container">
        <h1>{character ? character.name : "character"}</h1>
        <div className="image-container">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character-info-container-1">
          <ul>
            <li>{character && character.gender}</li>
            <li>{character.occupation}</li>
            <li>{character.hairColor}</li>
            <li>{character.firstEpisode}</li>
            <li>{character.voicedBy}</li>
          </ul>
        </div>
        <div className="character-info-container-2">
          <ul>
            <li>
              <a href={character.wikiUrl}>{`${character.name} Wiki Page`}</a>
              {favorited ? (
                <button
                  className='remove-favorite'
                  onClick={() =>
                    apiCalls.removeFavoriteCharacter({ id: id }).then((res) => {
                      if (Number(res.id) === Number(id)) {
                        setFavorited(false);
                      }
                    })
                  }
                >
                  Remove from Favorites
                </button>
              ) : (
                <button 
                  className="favorite"
                  onClick={() =>
                    apiCalls.postCharacter(character).then((res) => {
                      if (res.id === Number(id)) {
                        return setFavorited(true);
                      } else {
                        return alert(res);
                      }
                    })
                  }
                >
                  Favorite This Character
                </button>
              )}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
