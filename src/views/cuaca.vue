<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather Widget</h2>
    <div class="location-input">
      <label class="label" for="location" style="color: black;">Enter Location:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData" style="background-color: #3498db; color: white;">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
    <button class="tombol3" @click="BackToHome">Back To Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
  BackToHome() {
    this.$router.push('/home')
  },  
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};

</script>

<style>

.tombol3 {
display: flex;
justify-content: center;
gap: 10px;
border-radius: 20px;
padding: 5px;
background-color: #3498db;
color: white
}

.tombol3:hover {
  background-color: #A9A9A9;
}

.weather-widget {
/* ... existing styles ... */
background-image: url(../assets/c_1.png);
display: flex;
flex-direction: column;
align-items: center;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
min-height: 100vh;
padding: 20px;
}


.widget-title {
  margin-top: 0;
  color: black;
}

.location-input {
  margin-bottom: 10px;
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
}

.temperature {
  font-size: 24px;
  color: black;
  font-weight: bold;
}

.description {
  font-size: 16px;
}
</style>