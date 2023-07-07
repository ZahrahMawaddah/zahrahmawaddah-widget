<template>
  <div class="location-widget">
    <h2>Your Location</h2>
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Finding your location...</p>
    </div>
    
    <div class="location-input">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>

    <button class="Y" @click="fetchLocationDetails">Find Location Details</button>
    <button class="tombol2" @click="BackToHome">Back To Home</button>

    <div v-if="foundLocation">
      <h3>Location Details</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    BackToHome() {
    this.$router.push('/home')
  },
    async fetchLocationDetails() {
      try {
        const apiKey = '92591005a7b94008909d59a64b6d2a49';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style>

.Y {
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: #3498db;
  color: white
}

.Y:hover {
  background-color: #A9A9A9;
}

.tombol2 {
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: #3498db;
  color: white
}

.tombol2:hover {
  background-color: #A9A9A9;
}
.location-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/l2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
}
.location-input button.tombol {
  margin-top: 20px;
  align-self: center;
}
.location-widget h2 {
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
}
.location-widget p {
  color: #3498db;
}
.location-input {
  margin-top: 20px;
}
.location-input label {
  display: block;
  margin-bottom: 5px;
  color: black;
  font-size: 16px;
}
.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.location-input button {
  padding: 10px 20px;
  background-color: #d05eb6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.location-input button:hover {
  background-color: #830c83;
}
.location-input button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
.location-details {
  margin-top: 20px;
  text-align: left;
}
.location-details h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
}
.location-details p {
  margin: 5px 0;
  color: #666;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>