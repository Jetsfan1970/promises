let baseURL = "https://deckofcardsapi.com/api/deck";

axios
  .get(`${baseURL}/new/draw/`)
  .then((response) => {
    let { suit, value } = response.data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

let baseURL = "https://deckofcardsapi.com/api/deck";

axios
  .get(`${baseURL}/new/draw/`)
  .then((response) => {
    let deckId = response.data.deck_id;
    console.log(response.data);
    return axios.get(`${baseURL}/${deckId}/draw/`);
  })
  .then((response) => {
    console.log(response.data);
  });

let baseURL = "https://deckofcardsapi.com/api/deck";
let deckId;
btn = document.querySelector("button");
h1 = document.querySelector("h1");

axios.get(`${baseURL}/new/draw/`).then((response) => {
  return (deckId = response.data.deck_id);
});

btn.addEventListener("click", function () {
  axios.get(`${baseURL}/${deckId}/draw/`).then((response) => {
    let card = response.data.cards[0].image;
    let img = document.createElement("img");
    img.setAttribute("src", card);
    h1.append(img);
  });
});
