var unirest = require("unirest");

var rapidAPI = unirest("GET", "https://movies-tvshows-data-imdb.p.rapidapi.com/");

rapidAPI.headers({
    "x-rapidapi-key": "89c20ee19cmshb9b1a97ffa75f6bp13b9a9jsn1a1284be8d95",
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
    "useQueryString": true
});


export default rapidAPI;