const apiCalls = {
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
