import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import "./characters-screen.scss";
import apiCalls from "../../apiCalls";

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [renderedCharacters, setRenderedCharacters] = useState();
  const [hairColors, setHairColors] = useState([]);
  const [currentStyle, setCurrentStyle] = useState();
  const [name, setName] = useState();
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState();

  const getHairStyles = (data) => {
    let possibleHairColors = data.reduce((acc, character) => {
      if (!acc.includes(character.hairColor)) {
        acc.push(character.hairColor);
      }
      return acc;
    }, []);
    setHairColors(possibleHairColors);
  };

  const filterCharacters = () => {
    let output = characters;
    if (currentStyle) {
      output = output.filter(
        (character) => character.hairColor === currentStyle
      );
    }

    if (name) {
      output = output.filter((character) => {
        let filter = true;
        name
          .toLowerCase()
          .split("")
          .forEach((i) => {
            if (!character.name.toLowerCase().split("").includes(i)) {
              filter = false;
            }
          });
        return filter;
      });
    }

    const charIsLetter = (char) => {
      if (typeof char !== "string") {
        return false;
      }

      return char.toLowerCase() !== char.toUpperCase();
    };

    if (currentEpisode) {
      console.log(
        currentEpisode,
        currentEpisode
          .split('" ')
          .filter((x) => !x.includes("("))
          .filter((x) => !x.includes(")"))
          .join("")
          .split("")
          .filter((x) => x !== `"`)
          .join("")
      );

      output = output.filter((character) => {
        if (!character.firstEpisode) {
          return false;
        }

        return (
          character.firstEpisode
            .split("")
            .filter((x) => x !== '"')
            .join("") ===
          currentEpisode
            .split('" ')
            .filter((x) => !x.includes("("))
            .filter((x) => !x.includes(")"))
            .join("")
            .split("")
            .filter((x) => x !== `"`)
            .join("")
        );
      });
    }
    return output;
  };

  // {
  //   if(!character.firstEpisode) {
  //     return false
  //   }
  //   let resolvesTo = false;
  //   character.firstEpisode.split("\"").forEach((i) => {
  //     if(currentEpisode.split("\"").includes(i)) {
  //       resolvesTo = true
  //     }
  //   })
  //   return resolvesTo
  // }

  useEffect(() => {
    Promise.all([apiCalls.getEpisodes(), apiCalls.getCharacters()]).then(
      (calls) => {
        getHairStyles(calls[1]);
        setCharacters(calls[1]);
        setEpisodes(calls[0]);
      }
    );
  }, []);

  useEffect(() => {
    setRenderedCharacters(filterCharacters());
  }, [characters, currentStyle, name, currentEpisode]);

  return (
    <section className={"component-container"}>
      <h1>Characters</h1>
      <Form
        episodes={episodes}
        currentEpisode={currentEpisode}
        setCurrentEpisode={setCurrentEpisode}
        setName={setName}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        styles={hairColors}
      />
      {renderedCharacters && (
        <CharacterContainer characters={renderedCharacters} />
      )}
    </section>
  );
}
