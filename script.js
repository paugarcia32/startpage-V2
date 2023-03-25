function updateWeather() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelona,España&appid=dba306998ebe631bfd796148d0ff7a9b&units=metric';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var temperature = data.main.temp;
        var weatherDescription = data.weather[0].description;
  
        var weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = temperature.toFixed(1) + "°C";
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
  
  function updateTime() {
    var now = new Date();
    var timeContainer = document.getElementById('time-container');
    timeContainer.innerHTML = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: false });
  
    var dateContainer = document.getElementById('date-container');
    dateContainer.innerHTML = now.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  
  updateTime();
  setInterval(updateTime, 1000); // Actualizar la hora cada segundo
  updateWeather(); // Actualizar la temperatura inmediatamente
