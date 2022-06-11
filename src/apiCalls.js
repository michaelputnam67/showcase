let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

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
  postCharacter: (post) =>
    fetch("https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(post),
      redirect: "follow",
    })
      .then((res) => res.json())
      .catch((err) => alert(err)),
};

export default apiCalls;
