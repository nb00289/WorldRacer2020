WorldRacer2020 = {

  // All names are changeable, just the outline to get everything in code
  menu: document.getElementById("menu_button"),
  start: document.getElementById("start_button"),
  settings: document.getElementById("difficulty_button"),
  level: document.getElementById("level_select_button"),
  sound: document.getElementById("sound_button"),
  music: document.getElementById("music_button"),
  car: document.getElementById("user_car"),
  track: document.getElementsByClassName("track"),


  init: function () {
    startRace();
    collision();
  },

  startRace: function () {
    startTimer();
  },

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

  collision: function () {

  },

}

WorldRacer2020.init();