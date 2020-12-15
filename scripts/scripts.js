WorldRacer2020 = {

  // All names and id's are changeable, just the outline to get everything in code
  menu: document.getElementById("menuBtn"),
  startRacing: document.getElementById("startBtn"),
  difficulty: document.getElementById("difficultyBtn"),
  sound: document.getElementById("soundBtn"),
  music: document.getElementById("musicBtn"),


  car: {
    //distance algorithims, car image, div element
  },

  track: {
  //collision algo ... 
  },

  timer: {
    time: 0,
    isRunning: false,
    start: function() {
      let x = y
    }
  },

  countdown: {
    // when track is loaded in, timer visable on screen counds down from # (10?)
  },


  init: function () {
    startRace();
    collision();
  },

  menuClick: function() {
    this.menu.onclick = x //function() { 
      //document.location = “link”}
  },

//begins car movement and timer -- moves to new page which moves car and timer
  startRace: function () {
    this.startRacing.onclick = some_Function(); //to open new page or however we do it
  },

  //checks to see if # of laps has been compleated
  finishRace: function () {
    stopTimer();
  },

  startTimer: function () {
    if(this.countdown == 0) {
      this.timer.start();
      this.timer.isRunning == true;
    }
  },

  stopTimer: function () {
    //when car passes finishline x times, timer stops
    // has check finish function inside it
    if(x.times.happens){
      this.timer.isRunning == false;
    }
  },

  renderCar: function () {
  },

  moveCar: function () {
  },

  //if car hits track - maybe be relpaced with distance
  collision: function () {
  },
}

WorldRacer2020.init();