const apiCalls = {
  getSingleCharacter: (id) =>
    fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
      .then((res) => res.json())
      .catch((err) => alert(err)),
  getCharacters: () =>
    fetch("https://bobsburgers-api.herokuapp.com/characters/")
      .then((res) => res.json())
      .catch((err) => alert(err)),
  getEpisodes: () =>
    fetch("https://bobsburgers-api.herokuapp.com/episodes/")
      .then((res) => res.json())
      .catch((err) => alert(err)),
};

export default apiCalls;
