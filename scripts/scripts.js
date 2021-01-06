WorldRacer2020 = {

  // All names and id's are changeable, just the outline to get everything in code
  //menu: document.getElementById("menuBtn"),
  //startRacing: document.getElementById("startBtn"),
  //difficulty: document.getElementById("difficultyBtn"),
  sound: document.getElementById("soundBtn"),
  music: document.getElementById("musicBtn"),

  car: null,
  wall: [],
  raceTrackArray : [
    [0, 0, 1], [0, 1, 2], [0, 2, 0], [0, 3, 1], [0, 4, 2], [0, 5, 0], [0, 6, 1], [0, 7, 1], [0, 8, 0], [0, 9, 0], [0, 10, 0],
    [0, 11, 0], [0, 12, 0], [0, 13, 0], [0, 14, 0], [0, 15, 0], [0, 16, 0], [0, 17, 0], [0, 18, 0], [0, 19, 0], [0, 20, 0],
    [0, 21, 0], [0, 22, 0], [0, 23, 0], [0, 24, 0], [0, 25, 0], [0, 26, 0], [0, 27, 0], [0, 28, 0], [0, 29, 0], [0, 30, 0],
    [0, 31, 0], [0, 32, 0], [0, 33, 0], [0, 34, 0], [0, 35, 0], [0, 36, 0], [0, 37, 0], [0, 38, 0], [0, 39, 0], [0, 40, 0],
    []
  ],

  init: function () {
    WorldRacer2020.renderTrack();
  },

  timer: {
    //This was taken off of :
    //https://joe-riggs.com/blog/2012/05/javascript-count-up-timer-with-hours-minutes-second-hours-minutes/
    //It said it required jquery, but this is way to "count up"
    time: 0,
    isRunning: false,
    start: function () {
      var time_shown = $("#realtime").text();
      var time_chunks = time_shown.split(":");
      var hour, mins, secs;

      hour = Number(time_chunks[0]);
      mins = Number(time_chunks[1]);
      secs = Number(time_chunks[2]);
      secs++;
      if (secs == 60) {
        secs = 0;
        mins = mins + 1;
      }
      if (mins == 60) {
        mins = 0;
        hour = hour + 1;
      }
      if (hour == 13) {
        hour = 1;
      }

      $("#realtime").text(hour + ":" + plz(mins) + ":" + plz(secs));

    }, plz: function (digit) {

      var zpad = digit + '';
      if (digit < 10) {
        zpad = "0" + zpad;
      }
      return zpad;
    }
  },
  //Need to make it understandable and change it to work for vanilla JS

  countdown: {
    // when track is loaded in, timer visable on screen counds down from # (10?)
  },

  createCar: function () {
    let cardiv = document.createElement("div");
    cardiv.className = "car";
    this.container.append(cardiv);
    let car = {
      immage: "",
      x_pos: x,
      y_pos: y,
      element: cardiv,
    }
    return car
  },

  renderTrack: function () {
    // 0 = race track, 1 = wall, 2 = grass
    //for (i = 0; i < this.raceTrackArray; i++){}
    let track_container = document.getElementById("grid")
    for (i = 0; i < this.raceTrackArray.length; i++) {
      if (this.raceTrackArray[i][2] === 0) {
        let raceSquare = document.createElement("div")
        raceSquare.className = "race_square";
        track_container.appendChild(raceSquare);
      }
      if (this.raceTrackArray[i][2] === 1) {
        let wallSquare = document.createElement("div")
        wallSquare.className = "wall_square";
        track_container.appendChild(wallSquare);
      }
      if (this.raceTrackArray[i][2] === 2) {
        let grassSquare = document.createElement("div")
        grassSquare.className = "grass_square";
        track_container.appendChild(grassSquare);
      }
    }
    this.raceSquare = track_container.children;
    this.wallSquare = track_container.children;
    this.grassSquare = track_container.children;
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
    if (this.countdown == 0) {
      this.timer.start();
      this.timer.isRunning == true;
    }
  },

  stopTimer: function () {
    //when car passes finishline x times, timer stops
    // has check finish function inside it
    if (x.times.happens) {
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