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
  const [name, setName] = useState()
  const [episode, setEpisode] = useState();

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
    let output = characters
    if(currentStyle) {
      output = output.filter(character => character.hairColor === currentStyle)
    } 

    if(name) {
      output = output.filter(character => {
        let filter = true
        name.toLowerCase().split('').forEach((i) => {
          if(!character.name.toLowerCase().split('').includes(i)) {
            filter = false
          }
        })
        return filter
      }) 
    }

    return output
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
  }, [characters, currentStyle, name])

  return (
    <section className={'component-container'} >
      <h1>Characters</h1>
      <Form setName={setName} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} styles={hairColors} />
      {renderedCharacters && <CharacterContainer characters={renderedCharacters}/>}
    </section>
  );
}
