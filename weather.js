const weather = {
  getWeatherData(city) {
    const apiKey = "e42138fb1b22d295fd7291adb8aa7877";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  },

  displayWeather(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°c";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
  },

  search() {
    this.getWeatherData(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

 
sweather.getWeatherData("Nairobi");

/*function getWeatherData(location) {
    const apiKey = "a94b24ad8aae5931c0191ac9a9b1e79e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(`Weather data for ${location}:`, data);
        // Extract and display specific weather information as needed
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }
  
  // Example usage
  getWeatherData("Nairobi");*/

  