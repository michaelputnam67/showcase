import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import "./characters-screen.scss";
import apiCalls from "../../apiCalls";

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [renderedCharacters, setRenderedCharacters] = useState([]);
  const [hairColors, setHairColors] = useState([]);
  const [currentStyle, setCurrentStyle] = useState();
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupations, setOccupations] = useState([]);
  const [actor, setActor] = useState("");
  const [actors, setActors] = useState([]);
  const [age, setAge] = useState(null);

  const getActors = (data) => {
    let possibleActors = data.reduce((acc, character) => {
      if (!acc.includes(character.voicedBy)) {
        acc.push(character.voicedBy);
      }
      return acc;
    }, []);
    setActors(possibleActors);
  };

  const getOccupations = (data) => {
    let possibleOccupations = data.reduce((acc, character) => {
      if (!acc.includes(character.occupation)) {
        acc.push(character.occupation);
      }
      return acc;
    }, []);
    setOccupations(possibleOccupations);
  };

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

    if (age) {
      output = output.filter((character) => {
        if (!character.age) {
          return false;
        }
        let charAge = character.age
          .split("")
          .filter((x) => x !== "s")
          .join("")
          .split("-")
          .filter((x) => !isNaN(x));

        if (charAge.length > 1) {
          if (
            Number(charAge[0]) > Number(age) ||
            Number(charAge[1]) < Number(age)
          ) {
            return false;
          } else {
            return true;
          }
        }
        return Number(charAge[0]) === Number(age);
      });
    }
    if (actor) {
      output = output.filter((character) => {
        return character.voicedBy === actor;
      });
    }

    if (occupation) {
      output = output.filter((character) => {
        return character.occupation === occupation;
      });
    }

    if (name) {
      output = output.filter((character) => {
        let chars = character.name.toLowerCase().split("")
        let inputName = name.toLowerCase().split("")
        let filter = true;
        inputName.forEach((i) => {
            if (!chars.includes(i) ) {
              filter = false;
            }
          });
        return filter;
      });
    }

    if (currentEpisode) {
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

  useEffect(() => {
    Promise.all([apiCalls.getEpisodes(), apiCalls.getCharacters()]).then(
      (calls) => {
        getActors(calls[1]);
        getOccupations(calls[1]);
        getHairStyles(calls[1]);
        setCharacters(calls[1]);
        setEpisodes(calls[0]);
      }
    );
  }, []);

  useEffect(() => {
    setRenderedCharacters(filterCharacters());
  }, [characters, currentStyle, name, currentEpisode, occupation, actor, age]);

  return (
    <section className={"component-container"}>
      <h1>Characters</h1>
      <Form
        setAge={setAge}
        age={age}
        actor={actor}
        actors={actors}
        setActor={setActor}
        occupation={occupation}
        setOccupation={setOccupation}
        occupations={occupations}
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
