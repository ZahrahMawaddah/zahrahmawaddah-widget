<template>
    <div class="photo-widget">
        <h1 class="ket">Kumpulan Gambar Lucu</h1>
      <div class="image-container">
        <img :src="currentPhoto" :alt="currentPhoto" :style="{ width: '400px', height: 'auto' }" />
      </div>
      <div class="controls-foto">
        <button @click="BackToHome">Back To Home</button>
        <button @click="prevPhoto">Previous</button>
        <button @click="nextPhoto">Next</button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        photos: [require('../assets/gbr1.jpg'),require('../assets/gbr2.jpg'),require('../assets/gbr3.jpg'),require('../assets/gbr4.jpg'),require('../assets/gbr5.jpg'),require('../assets/gbr6.jpg'),require('../assets/gbr7.jpg'),require('../assets/gbr8.jpg'),require('../assets/gbr9.jpg'),require('../assets/gbr10.jpg')],
        currentIndex: 0,
      };
    },
    computed: {
      currentPhoto() {
        return this.photos[this.currentIndex];
      },
    },
    methods: {
      BackToHome() {
        this.$router.push('/home')
      },
      prevPhoto() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.photos.length - 1;
        }
      },
      nextPhoto() {
        if (this.currentIndex < this.photos.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
    },
  };
  </script>
  
  <style>
.ket {
    font-weight: bold;
    margin-bottom: 50px;
}

.photo-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.image-container {
  margin-bottom: 20px;
}

.controls-foto button {
  padding: 10px 20px;
  font-size: 18px;
  background-color:#3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50px;
  margin-right: 10px;
}

.controls-foto button:hover {
  background-color:#A9A9A9
}

  </style>