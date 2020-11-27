// function to hit the API

async function getWeather() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=guangzhou',
      {
        mode: 'cors',
      }
    );
    const weatherData = await response.json();
    console.log(weatherData);

  } catch (error) {
    alert(error);
  }
}

getWeather();

// function that takes a location and
// return the weather data for that location

// function that process the JSON data you're getting
// from the API
// return an object with only the data you require for the app

// set up simple form that let users input location and
// fetch the weather info

// display the information on your webpage

// toggle between F and C degrees

// OPTIONAL: loading component
