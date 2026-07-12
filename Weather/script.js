//
//
const content = document.getElementById("content");
const searchBar = document.querySelector(".searchbar");
const tempSwitch = document.getElementById("tempSwitch");
const city = "dhaka";
let tempUnit = "C";
const modifier = (x) => {
  if(tempUnit=="C") return ((x-32)/1.8).toFixed(2);
  else return x;
}

const conditionGroups = {
  clear: ["clear", "sunshine"],
  cloudy: ["overcast", "partially cloudy", "cloudierpm", "variablecloud"],
  rain: ["rain", "rainam", "rainpm", "rainallday", "rainchance", "raindefinite", "rainclearinglater"],
  snow: ["snow", "snowam", "snowpm", "snowallday", "snowchance", "snowdefinite"],
  storm: ["stormspossible", "stormsstrong", "thunderstorm"],
  fog: ["fog", "mist"],
  hot: ["heatindex", "warmingup"],
  cold: ["coolingdown", "windchill"]
};

let cond ="";
const weatherPaper = (data) => {
  let condition = data.currentConditions.conditions;
  cond =  condition.toLowerCase();
  if(conditionGroups.clear.includes(cond)) {
    return "images/clear.png";
  }
  if(conditionGroups.cloudy.includes(cond)) {
    return "images/cloudy.png";
  }
  if(conditionGroups.rain.includes(cond)) {
    return "images/rain.png";
  }
  if(conditionGroups.snow.includes(cond)) {
    return "images/snow.png";
  }
  if(conditionGroups.storm.includes(cond)) {
    return "images/storm.png";
  }
  if(conditionGroups.fog.includes(cond)) {
    return "images/fog.png";
  }
  if(conditionGroups.hot.includes(cond)) {
    return "images/hot.jpg";
  }
  if(conditionGroups.cold.includes(cond)) {
    return "images/cold.png";
  }
  return `images/default.${["png", "jpg"][Math.floor(Math.random() * 2)]}`;
}

const fetchWeather = (city) => {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=J446GYR9GUYPYA4668AV3TBEP&include=current`,
  ) .then((response) => response.json())
  .then((data) => {
    content.innerHTML = `
    <div class="container">
      <div class="weather-display">
        <img src="${weatherPaper(data)}" alt="Weather Image" class="weather-image">
      
        <div class="weather-info">
        <h1 class="city">${data.resolvedAddress}</h1>
        
        <div class="temperature-group">
          <h2 class="temp">${modifier(data.currentConditions.temp)}°${tempUnit}</h2>
          <div class="temp-range">
            <span class="temp-min">Min: ${modifier(data.days[0].tempmin)}°${tempUnit}</span>
            <span class="temp-max">Max: ${modifier(data.days[0].tempmax)}°${tempUnit}</span>
          </div>
          <h3 class="feels-like">Feels like: ${modifier(data.currentConditions.feelslike)}°${tempUnit}</h3>
        </div>
      
        <div class="condition-group">
          <h3 class="conditions">${data.currentConditions.conditions}</h3>
          <p class="description">${data.days[0].description}</p>
        </div>
        <div class="weather-details">
          <div class="detail-item">
            <span class="detail-label">Humidity:</span>
            <span class="detail-value">${data.currentConditions.humidity}%</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Pressure:</span>
            <span class="detail-value">${data.currentConditions.pressure} hPa</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Visibility:</span>
            <span class="detail-value">${data.currentConditions.visibility} km</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">UV Index:</span>
            <span class="detail-value">${data.currentConditions.uvindex}</span>
          </div>
        </div>
      </div>
    </div>
    `;
  })
  .catch(function (err) {
    console.error(err);
  });
}
  
searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const city = searchBar.value;
    fetchWeather(city);
    searchBar.value = "";
  }
});

tempSwitch.addEventListener("change", () => {
  if (tempSwitch.checked) {
    tempUnit = "F";
  } else {
    tempUnit = "C";
  }
  fetchWeather(city);
});

fetchWeather(city);
