let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const randomId = (num) => {
  return Math.ceil(Math.random() * num);
};

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
      redirect: "error",
    })
      .then((res) => {
        if (!res.ok) {
          return alert(res);
        }
        return res.json();
      })
      .catch((err) => alert(err)),
  getFavoriteCharacters: () =>
    fetch("https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters")
      .then((res) => res.json())
      .catch((err) => alert(err)),
  removeFavoriteCharacter: (id) =>
    fetch("https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters", {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify(id),
      redirect: "error",
    })
      .then((res) => res.json())
      .catch((err) => alert(err)),
  getTruck: (id) =>
    fetch(`https://bobsburgers-api.herokuapp.com/pestControlTruck/${id}
  `).then((res) => res.json().catch((err) => alert(err))),
  getBurger: () =>
    fetch(
      `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomId(333)}`
    )
      .then((res) => res.json())
      .catch((err) => alert(err)),
  getStore: () =>
    fetch(
      `https://bobsburgers-api.herokuapp.com/storeNextDoor/${randomId(227)}`
    )
      .then((res) => res.json())
      .catch((err) => alert(err)),
};

export default apiCalls;
// https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters
