WorldRacer2020 = {

  // All names and id's are changeable, just the outline to get everything in code
  menu: document.getElementById("menu_button"),
  start: document.getElementById("start_button"),
  settings: document.getElementById("difficulty_button"),
  level: document.getElementById("level_select_button"),
  sound: document.getElementById("sound_button"),
  music: document.getElementById("music_button"),


  car: {
    //distance algorithims, car image, div element
  },

  track: {
  //collision algo ... 
  },

  timer: {
    checkFinish();
  },


  init: function () {
    startRace();
    collision();
  },

//begins car movement and timer
  startRace: function () {
    moveCar();
    startTimer();
  },

  //checks to see if # of laps has been compleated
  finishRace: function () {
    stopTimer();
  },

  startTimer: function () {
  },

  stopTimer: function () {
  },

  renderCar: function () {
  },

  moveCar: function () {
  },

  //if car hits track - maybe be relpaced with distance
  collision: function () {
  },

  checkFinish: function() {
    //for the timer, once finish is compleated - timer stops
  },

}

WorldRacer2020.init();