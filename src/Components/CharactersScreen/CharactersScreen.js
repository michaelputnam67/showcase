import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import './characters-screen.scss';
import apiCalls from '../../apiCalls'

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([])
  const [renderedCharacters, setRenderedCharacters] = useState()
  const [hairColors, setHairColors] = useState([])
  const[currentStyle, setCurrentStyle] = useState()

  const getHairStyles = (data) => {
    let possibleHairColors = data.reduce((acc, character) => {
      if(!acc.includes(character.hairColor)) {
        acc.push(character.hairColor)
      }
      return acc
    }, [])
    setHairColors(possibleHairColors)
  }

  const filterCharacters = () => {
    if(currentStyle) {
      return characters.filter(character => character.hairColor === currentStyle)
    } else {
      return characters
    }
  }

  useEffect(() => {
    apiCalls.getCharacters().then((data) => {
      getHairStyles(data)
      setCharacters(data)
    }).then(() => {

    })
  }, [])

  useEffect(() => {
    setRenderedCharacters(filterCharacters())
  }, [characters, currentStyle])

  return (
    <section className={'component-container'} >
      <h1>Characters</h1>
      <Form setCurrentStyle={setCurrentStyle} styles={hairColors} />
      {renderedCharacters && <CharacterContainer characters={renderedCharacters}/>}
    </section>
  );
}
