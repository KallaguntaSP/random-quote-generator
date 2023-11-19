const getQuote = document.getElementById("quote");
const getAuthor = document.getElementById("author");

function quotes() {
  fetch("https://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getQuote.innerHTML = data.content;
      getAuthor.innerHTML = data.author;
    });
}

quotes();
