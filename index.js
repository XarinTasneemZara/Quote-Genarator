var getQuote = document.querySelector(".quote");
var getButton = document.querySelector(".btn");
var author= document.querySelector(".writersName")
var api = {
    method: 'GET',
    headers: { 'X-Api-Key': 'OFTdAaaOoH9JFei33pU+Hw==b8twZVypxGUqxCpu'},
}

var apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

async function newQuote() {
    var response = await fetch(apiUrl, api);
    var makeJson = await response.json();
    getQuote.innerHTML=makeJson[0].quote;
    author.innerHTML=makeJson[0].author;
}

getButton.addEventListener("click", newQuote)