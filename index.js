// define variables
const adviceId = document.querySelector(".id");
const adviceText = document.querySelector("blockquote");
const button = document.querySelector("button");

fetch("	https://api.adviceslip.com/advice")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  })
  .then((data) => {
    const { advice, id } = data.slip;
    adviceId.innerText = id;
    adviceText.innerHTML = `&ldquo;${advice}&rdquo;`;
  })
  .catch((err) => {
    console.error(err);
  });

button.addEventListener("click", () => {
  location.reload();
});
