WorldRacer2020 = {
  track_container: document.getElementById("Grid"),
  racing: true,
  //hard_track_container: document. getElementById("hardGrid"),
  easyTrack: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

  ],
  
  racetimer : function(){
    let seconds = 0;
    let minutes = 0;
    let dispTime = document.getElementById('timerDisplay');

    function count(){
      //if(gameplay = true){
      seconds += 1;
      if(seconds >= 60){
        seconds = 0;
        minutes = minutes + 1;
      }
      dispTime.innerHTML = minutes + ":" + seconds;
    //}
  }
    var pace = setInterval(count, 1000);
  },

  init: function () {
    //changed to specific track, can esaily be changed back
    //WorldRacer2020.screenChange();
    //WorldRacer2020.laptimer();
    WorldRacer2020.renderTrack();
    WorldRacer2020.racetimer();
    let car = {
      elem: document.getElementById("car"),
      x: 189,
      y: 546,
      x_velocity: 21,
      y_velocity: 21,
      //color: WorldRacerSelect.carSelect.carChoice,
    };

    //moveCar = function () {
    // while (car.racing === true) {
    // car.x_pos = car.x_pos + car.x_velocity;
    // car.y_pos = car.y_pos + car.y_velocity;
    // }
    //},

    window.onkeydown = function (event) {
      //for (i = 0; i < this.easyTrack; i++) {
      //for (j = 0; j < 38; j++) {
      if (event.keyCode = 80) {
        WorldRacer2020.pause();
      }
      if (racing == true) {
        if (event.keyCode == 83 || event.keyCode == 40) {
          car.y = car.y + car.y_velocity;
        } else if (event.keyCode == 87 || event.keyCode == 38) {
          car.y = car.y - car.y_velocity;
        } else if (event.keyCode == 68 || event.keyCode == 39) {
          car.x = car.x + car.x_velocity;
        } else if (event.keyCode == 65 || event.keyCode == 37) {
          car.x = car.x - car.x_velocity;
        } else if (event.keyCode == 32 || event.keyCode == 74) {
          WorldRacer2020.lapButton();
        }
      } else if (racing == false) {
      }
       // }
      //}
      car.elem.style.top = car.y + "px";
      car.elem.style.left = car.x + "px";
      console.log(car.elem.style.top = car.y + "px",car.elem.style.left = car.x + "px");
    }

    collision = function () {
        console.log("making it here")
          if (car.elem.style.top <= 42) {
            seconds + 5;
          }
    }

    //moveCar();

  },

  renderTrack: function () {
    // 0 = race track, 1 = wall, 2 = grass
    for (i = 0; i < this.easyTrack.length; i++) {
      for (j = 0; j < 38; j++) {
        let tile = document.createElement("div");
        tile.style.top = i * 21 + "px";
        tile.style.left = j * 21 + "px";
        tile.className = "tile";
        if (this.easyTrack[i][j] === 2) {
          tile.classList.add("grass");
        } else if (this.easyTrack[i][j] === 0) {
          tile.classList.add("track");
        } else if (this.easyTrack[i][j] === 1) {
          tile.classList.add("wall")
        } else if (this.easyTrack[i][j] === 3) {
          tile.classList.add("finish");
        }
        WorldRacer2020.track_container.append(tile);
      }
    }
  }

}

WorldRacer2020.init();