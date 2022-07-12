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

  const renderFavoriteButton = (className, method, properties, message) => {
    return (
      <button
        // style={ favorited ? {
        //   "background-color": '#fe895b'
        // } : undefined}
        className={`${className} favorite-button`}
        onClick={() => {
          apiCalls[method](properties).then(() => {
            favorited ? setFavorited(false) : setFavorited(true);
          });
        }}
      >
        {message}
      </button>
    );
  };

  return (
    <div className="character-stats-container">
      <section className="character-info-container">
        <h1>{character ? character.name : "character"}</h1>
        {favorited
          ? renderFavoriteButton(
              "remove-favorite",
              "removeFavoriteCharacter",
              { id: id },
              "Remove From Favorites"
            )
          : renderFavoriteButton(
              "favorite",
              "postCharacter",
              character,
              "Favorite This Character"
            )}
        <div className="image-container">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character-info-container-1">
          <ul>
            {character.occupation && <li><span>occupation,</span> {character.occupation}</li>}
            <li>
              <span>hair color,</span> {character.hairColor}
            </li>
            <li>
              <span>first appeared in,</span> {character.firstEpisode}
            </li>
            <li>
              <span>voiced by,</span> {character.voicedBy}
            </li>
            <li>
              <a
                className="wiki-link"
                href={character.wikiUrl}
              >{`${character.name}'s Wiki Page`}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
