new Vue({
  
  el: "#app",
  data:{
      
       playerHealth: 100,
       monsterHealth:100,
       gameIsRunning: false,

  },
  methods: {
   
     startGame: function () {
        this.gameIsRunning = true;

     },
     attack: function () {
        
      this.playerHealth -= 3;
      this.monsterHealth -= 5;
     },
     specialAttack: function () {
      
      this.playerHealth -= 5;
      this.monsterHealth -= 15;

     },
     heal: function () {

     },
     giveUp: function () {

     },
     

  }


});