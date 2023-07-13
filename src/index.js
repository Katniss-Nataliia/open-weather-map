//API key and endpoint 
const API_KEY = "6a391254f6cc39adc714e97cc9098241";
const endpoint = "https://api.openweathermap.org/data/2.5/weather";

//Selecting DOM elements
const form = document.querySelector(".search-form");
const searchQuery = document.querySelector('input[name = "searchQuery"]');
const gallery = document.querySelector('gallery');

let currentSearchQuery = '';
let lang = 'en';
let units = 'metric'

// add event listener for form submit

form.addEventListener('submit', function(event){
    event.preventDefault();
    currentSearchQuery = searchQuery.value;
    fetchWeather(currentSearchQuery) // fethc weather based on the search query;
});



//function to fetch weatehr data from Open Weatehr Map API


function fetchWeather(query){
    const weatherURL = `${endpoint}?units=${units}&q=${query}&appid=${API_KEY}&lang=${lang}`
    axios
    .get(weatherURL)
    .then((response) => {
        // if(!response.ok) throw new Error(response.error);
        // return response.json ()
        const data = response.data; // why do we create a separate variable here?
        console.log (data)
        // showWeather(data);
        const weatherMarkup = response.map(location =>
            showWeather(location)).join('');
        

            updateWeather(weatherMarkup)
    
    })
    .catch(error => console.log(error))

}


// function to render weather data in the gallery 

function showWeather(city){
    // console.log(city);
    return `
    <div class='breed-card'>
      
      <p>${city.lat}</p>
      <p ">${city.weather[0].main}</p></div>
      <img >
    </div>
  `;
}

function updateWeather(markup){
    gallery.innerHTML(markup)
}