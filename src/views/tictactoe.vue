<template>
  <div class="container">
    <h1 class="z">Tic Tac Toe</h1>
    <div class="turn">Current Player: {{ currentPlayer }}</div> <!-- Tambahkan elemen untuk menampilkan giliran pemain saat ini -->
    <div class="board">
      <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
        <div class="cell" v-for="(cell, colIndex) in row" :key="colIndex" @click="makeMove(rowIndex, colIndex)">
          {{ cell }}
        </div>
      </div>
    </div>
    <button class="k" @click="resetBoard">Reset</button>
    <button class="tombol" @click="BackToHome">Back To Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [[null, null, null], [null, null, null], [null, null, null]],
      currentPlayer: 'X',
      gameOver: false
    };
  },
  methods: {
    BackToHome() {
      this.$router.push('/home');
    },
    makeMove(rowIndex, colIndex) {
      if (!this.gameOver && !this.rows[rowIndex][colIndex]) {
        this.rows[rowIndex][colIndex] = this.currentPlayer;
        if (this.checkWin(this.currentPlayer)) {
          alert(this.currentPlayer + ' wins!');
          this.gameOver = true;
        } else if (this.checkDraw()) {
          alert('It\'s a draw!');
          this.gameOver = true;
        } else {
          this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
        }
      }
    },
    checkWin(player) {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];
      return winningCombinations.some(combination => {
        return combination.every(index => {
          const [rowIndex, colIndex] = this.getCellPosition(index);
          return this.rows[rowIndex][colIndex] === player;
        });
      });
    },
    checkDraw() {
      return this.rows.every(row => row.every(cell => cell !== null));
    },
    resetBoard() {
      this.rows = [[null, null, null], [null, null, null], [null, null, null]];
      this.currentPlayer = 'X';
      this.gameOver = false;
    },
    getCellPosition(cellIndex) {
      const rowIndex = Math.floor(cellIndex / 3);
      const colIndex = cellIndex % 3;
      return [rowIndex, colIndex];
    }
  }
};
</script>
  
  <style>
  .z {
    color:black
  }
.tombol {
    display: flex;
    justify-content: center;
    gap: 10px;
    border-radius: 20px;
    padding: 5px;
    background-color: #3498db;
    color: white
  }

  .tombol:hover {
    background-color: #A9A9A9;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-image: url("../assets/tic2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  }

  .k {
    align-items: center;
    margin-top: 20px;
    background-color: #3498db;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
  }

  .k:hover {
    background-color:#3498db;
  }
  
  .board {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
  }
  
  .row {
    display: flex;
  }
  
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    font-size: 36px;
    cursor: pointer;
  }
  
  button {
    margin-top: 20px;
  }
  </style>