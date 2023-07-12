let favNum = 7;
let baseURL = "http://numbersapi.com";

axios.get(`${baseURL}/${favNum}?json`).then((data) => {
  console.log(data);
});

let url = "http://numbersapi.com/random/trivia?json";
let fournums = [];

for (let i = 1; i < 5; i++) {
  fournums.push(axios.get(url));
}

Promise.all(fournums).then((numarr) => {
  for (res of numarr) {
    let div = document.createElement("div");
    const h1Element = document.querySelector("h1");
    div.innerText = res.data.number;
    h1Element.appendChild(div);
  }
});

let favNum = 7;
let baseURL = "http://numbersapi.com";

Promise.all(
  Array.from({ length: 4 }, () => {
    return axios
      .get(`${baseURL}/${favNum}?json`)
      .then((response) => response.data);
  })
).then((facts) => {
  facts.forEach((data) => {
    const h1Element = document.querySelector("h1");
    const textNode = document.createTextNode(data.text);
    h1Element.appendChild(textNode);
  });
});
