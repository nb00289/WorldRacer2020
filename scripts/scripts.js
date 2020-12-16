WorldRacer2020 = {

  // All names and id's are changeable, just the outline to get everything in code
  //menu: document.getElementById("menuBtn"),
  //startRacing: document.getElementById("startBtn"),
  //difficulty: document.getElementById("difficultyBtn"),
  sound: document.getElementById("soundBtn"),
  music: document.getElementById("musicBtn"),


  car: null,

  track: [
    {
      pavement: "black",
      wall: "red", 
    }
  ],

  timer: {
    //This was taken off of :
    //https://joe-riggs.com/blog/2012/05/javascript-count-up-timer-with-hours-minutes-second-hours-minutes/
    //It said it required jquery, but this is way to "count up"
    time: 0,
    isRunning: false,
    start: function() {
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

    }, plz: function(digit){
 
      var zpad = digit + '';
      if (digit < 10) {
          zpad = "0" + zpad;
      }
      return zpad;
  }
  },
  //Need to make it understandable and change it to work for JS

  countdown: {
    // when track is loaded in, timer visable on screen counds down from # (10?)
  },


  init: function () {
    startRace();
    collision();
  },

  createCar: function(){
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