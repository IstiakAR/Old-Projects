import"./modulepreload-polyfill-B5Qt9EMX.js";const d=document.getElementById("content"),r=document.querySelector(".searchbar"),l=document.getElementById("tempSwitch"),o="dhaka";let t="C";const a=i=>t=="C"?((i-32)/1.8).toFixed(2):i,n={clear:["clear","sunshine"],cloudy:["overcast","partially cloudy","cloudierpm","variablecloud"],rain:["rain","rainam","rainpm","rainallday","rainchance","raindefinite","rainclearinglater"],snow:["snow","snowam","snowpm","snowallday","snowchance","snowdefinite"],storm:["stormspossible","stormsstrong","thunderstorm"],fog:["fog","mist"],hot:["heatindex","warmingup"],cold:["coolingdown","windchill"]};let s="";const u=i=>(s=i.currentConditions.conditions.toLowerCase(),n.clear.includes(s)?"images/clear.png":n.cloudy.includes(s)?"images/cloudy.png":n.rain.includes(s)?"images/rain.png":n.snow.includes(s)?"images/snow.png":n.storm.includes(s)?"images/storm.png":n.fog.includes(s)?"images/fog.png":n.hot.includes(s)?"images/hot.jpg":n.cold.includes(s)?"images/cold.png":`images/default.${["png","jpg"][Math.floor(Math.random()*2)]}`),c=i=>{fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${i}/today?key=J446GYR9GUYPYA4668AV3TBEP&include=current`).then(e=>e.json()).then(e=>{d.innerHTML=`
    <div class="container">
      <div class="weather-display">
        <img src="${u(e)}" alt="Weather Image" class="weather-image">
      
        <div class="weather-info">
        <h1 class="city">${e.resolvedAddress}</h1>
        
        <div class="temperature-group">
          <h2 class="temp">${a(e.currentConditions.temp)}°${t}</h2>
          <div class="temp-range">
            <span class="temp-min">Min: ${a(e.days[0].tempmin)}°${t}</span>
            <span class="temp-max">Max: ${a(e.days[0].tempmax)}°${t}</span>
          </div>
          <h3 class="feels-like">Feels like: ${a(e.currentConditions.feelslike)}°${t}</h3>
        </div>
      
        <div class="condition-group">
          <h3 class="conditions">${e.currentConditions.conditions}</h3>
          <p class="description">${e.days[0].description}</p>
        </div>
        <div class="weather-details">
          <div class="detail-item">
            <span class="detail-label">Humidity:</span>
            <span class="detail-value">${e.currentConditions.humidity}%</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Pressure:</span>
            <span class="detail-value">${e.currentConditions.pressure} hPa</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Visibility:</span>
            <span class="detail-value">${e.currentConditions.visibility} km</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">UV Index:</span>
            <span class="detail-value">${e.currentConditions.uvindex}</span>
          </div>
        </div>
      </div>
    </div>
    `}).catch(function(e){console.error(e)})};r.addEventListener("keypress",function(i){if(i.key==="Enter"){const e=r.value;c(e),r.value=""}});l.addEventListener("change",()=>{l.checked?t="F":t="C",c(o)});c(o);
