const apiKey = "7bdfdda22b3432494ade4290d19e9ae0";

function getAirQuality() {
  const city = document.getElementById("citySelect").value;
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?&q=${city}&appid=${apiKey}`)
    .then(res => {
      if (!res.ok) throw new Error("Data not available for this city");
      return res.json();
    })
    .then(data => {
     
      const cityCoords = {
        "delhi": { lat: 28.7041, lon: 77.1025 },
        "los angeles": { lat: 34.0522, lon: -118.2437 },
        "london": { lat: 51.5074, lon: -0.1278 },
        "beijing": { lat: 39.9042, lon: 116.4074 }
      };

      const { lat, lon } = cityCoords[city];

      return fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    })
    .then(res => res.json())
    .then(data => {
      const aqi = data.list[0].main.aqi;
      const components = data.list[0].components;

      const aqiLevels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
      const advice = [
        "Air quality is considered satisfactory.",
        "Air quality is acceptable.",
        "Sensitive groups should reduce outdoor exertion.",
        "Everyone may begin to experience health effects.",
        "Health warnings of emergency conditions."
      ];

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <h3>AQI: ${aqi} (${aqiLevels[aqi - 1]})</h3>
        <p><strong>PM2.5:</strong> ${components.pm2_5}</p>
        <p><strong>PM10:</strong> ${components.pm10}</p>
        <p><strong>O₃:</strong> ${components.o3}</p>
        <p><strong>NO₂:</strong> ${components.no2}</p>
        <p><strong>SO₂:</strong> ${components.so2}</p>
        <p><strong>CO:</strong> ${components.co}</p>
        <p><em>Health Advice: ${advice[aqi - 1]}</em></p>
      `;
    })
    .catch(err => {
      document.getElementById("result").textContent = `Error: ${err.message}`;
    });
}
