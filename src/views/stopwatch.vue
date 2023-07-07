<template>
  <div class="container2">
    <h1 class="i">Stopwatch</h1>
    <div class="display">{{ formatTime }}</div>
    <div class="controls">
      <button class="controls-button" @click="start" :disabled="isRunning">Start</button>
      <button class="controls-button" @click="stop" :disabled="!isRunning">Stop</button>
      <button class="controls-button" @click="reset" :disabled="isRunning">Reset</button>
    </div>
    <button class="tombol1" @click="BackToHome">Back To Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      currentTime: null
    };
  },
  computed: {
    elapsedTime() {
      if (!this.startTime) return 0;
      return this.currentTime - this.startTime;
    },
    formatTime() {
      const minutes = Math.floor(this.elapsedTime / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
      return `${this.padZero(minutes)}:${this.padZero(seconds)}.${this.padZero(milliseconds)}`;
    }
  },
  methods: {
    start() {
      if (!this.isRunning) {
        this.startTime = new Date().getTime();
        this.currentTime = this.startTime;
        this.isRunning = true;
        this.updateTime();
      }
    },
    BackToHome() {
    this.$router.push('/home')
  },
    stop() {
      if (this.isRunning) {
        this.isRunning = false;
      }
    },
    reset() {
      if (!this.isRunning) {
        this.startTime = null;
        this.currentTime = null;
      }
    },
    updateTime() {
      if (this.isRunning) {
        this.currentTime = new Date().getTime();
        requestAnimationFrame(this.updateTime);
      }
    },
    padZero(value) {
      return value.toString().padStart(2, '0');
    }
  }
};
</script>

<style>
.i {
color: #d05eb6
}

.tombol1 {
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: #d05eb6;
  color: white
}

.tombol1:hover {
  background-color: #982184;
}
.container2 {
  background-image: url('../assets/t3.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.display {
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
  color: #e4a2e4;
}

.controls {
display: flex;
justify-content: center;
gap: 10px;
}

.controls-button {
padding: 10px 20px;
background-color: #df76c2;
color: white;
border: none;
border-radius: 5px;
font-size: 18px;
cursor: pointer;
}

.controls-button:hover {
background-color: #830c83;
}

.controls-button:disabled {
background-color: #ccc;
cursor: not-allowed;
}
</style>