//API key and endpoint 

const API_KEY = "6a391254f6cc39adc714e97cc9098241";
const endpoint = "https://api.openweathermap.org/data/2.5/weather";

//Selecting DOM elements

const form = document.querySelector(".search-form");
const searchQuery = document.querySelector('input[name = "searchQuery"]');

let currentSearchQuery = '';

const gallery = document.querySelector("gallery")

// add event listener for form submit

form.addEventListener('submit', function(event){
    event.preventDefault();
    currentSearchQuery = searchQuery.value;
    // gallery.innerHTML = '';
    apiFetchWeather(currentSearchQuery) // fethc weather based on the search query;
});



//function to fetch weatehr data from Open Weatehr Map API


function apiFetchWeather(query){
    const weatherURL = `${endpoint}?units=metric&q=${query}&appid=${API_KEY}`
    axios
    .get(weatherURL)
    .then(function(response){
        const data = response.data;
        console.log(data)
    })
    .catch(error => console.log(error))

}



// function to render weather data in the gallery 

function createMarkup (city){

    return `
    
    
    `;
}

