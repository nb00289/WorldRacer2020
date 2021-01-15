WorldRacerSelect = {
  init: function () {
    screenChange = function () {
      let a = document.getElementById('home_div')
      let b = document.getElementById('diff_div')
      let c = document.getElementById('car_div')
      let d = document.getElementById('track_div')
      let e = document.getElementById('race_div')
      if (document.getElementById('homeToCar').clicked == true) {
        a.style.display = "none";
        c.style.display = "block";
      }
      if (document.getElementById('homeToDiff').clicked == true) {
        a.style.display = "none";
        b.style.display = "block";
        console.log("home to diff")
      }
      if (document.getElementById('carToHome').clicked == true) {
        c.style.display = "none";
        a.style.display = "block";
      }
      if (document.getElementById('carToTrack').clicked == true) {
        c.style.display = "none";
        d.style.display = "block";
      }
      if (document.getElementById('trackToHome').clicked == true) {
        d.style.display = "none";
        a.style.display = "block";
      }
      if (document.getElementById('trackToCar').clicked == true) {
        d.style.display = "none";
        c.style.display = "block";
      }
      if (document.getElementById('trackToRace').clicked == true) {
        d.style.display = "none";
        e.style.display = "block";
      }
      if (document.getElementById('raceToTrack').clicked == true) {
        e.style.display = "none";
        d.style.display = "block";
      }
      if (document.getElementById('raceToCar').clicked == true) {
        e.style.display = "none";
        c.style.display = "block";
      }
      if (document.getElementById('raceToDiff').clicked == true) {
        e.style.display = "none";
        b.style.display = "block";
      }
      if (document.getElementById('raceToHome').clicked == true) {
        e.style.display = "none";
        a.style.display = "block";
      }
    },
    carSelect = function () {
        var carChoice = "black";
        if (document.getElementById('rCar').clicked == true) {
          carChoice == "red";
        }
        if (document.getElementById('oCar').clicked == true) {
          carChoice == "orange";
        }
        if (document.getElementById('yCar').clicked == true) {
          carChoice == "yellow";
        }
        if (document.getElementById('gCar').clicked == true) {
          carChoice == "green";
        }
        if (document.getElementById('bCar').clicked == true) {
          carChoice == "blue";
        }
        if (document.getElementById('pCar').clicked == true) {
          carChoice == "purple";
        }
    },

    trackSelect = function () {
        var trackChoice = none;
        if (document.getElementById('ovaltrack').clicked == true) {
          trackChoice == ovalTrack;
        }
        if (document.getElementById('easytrack').clicked == true) {
          trackChoice == easyTrack;
        }
        if (document.getElementById('mediumtrack').clicked == true) {
          trackChoice == mediumTrack;
        }
        if (document.getElementById('hardTrack').clicked == true) {
          trackChoice == hardTrack;
        }
    }
  }
},
WorldRacerSelect.init();
WorldRacer2020 = {
  track_container: document.getElementById("Grid"),
  //hard_track_container: document. getElementById("hardGrid"),
  ovalTrack: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],
    [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],
    [2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],
    [2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2], 
    [2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ],
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
  medTrack: [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
  ],

  hardTrack: [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [2, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [2, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2],

    [1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2],

    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  ],

  timer: {
  },

  countdown: {
    // when track is loaded in, timer visable on screen counds down from # (10?)
  },


  init: function () {
    //changed to specific track, can esaily be changed back
    //WorldRacer2020.renderTrack();
    WorldRacer2020.renderTrack();
    let car = {
      elem: document.getElementById("car"),
      x: 0,
      y: 0,
      x_velocity: 5,
      y_velocity: 5,
      //color: WorldRacerSelect.carSelect.carChoice,
    }
    
   //moveCar = function () {
     // while (car.racing === true) {
       // car.x_pos = car.x_pos + car.x_velocity;
       // car.y_pos = car.y_pos + car.y_velocity;
     // }
    //},


    window.onkeydown = function (event) {
      if (event.keyCode == 83|| event.keyCode == 40) {
        car.y = car.y + 21;
      } else if (event.keyCode == 87 || event.keyCode == 38) {
        car.y = car.y - 21;
      } else if (event.keyCode == 68 || event.keyCode == 39) {
        car.x = car.x + 21;
      } else if (event.keyCode == 65 || event.keyCode == 37) {
        car.x = car.x - 21;
      }

      car.elem.style.top = car.y + "px";
      car.elem.style.left = car.x + "px";
    }
    
    //moveCar();

  }, 

  renderTrack: function () {
    // 0 = race track, 1 = wall, 2 = grass
    //Track is interchangeable
    for (i = 0; i < this.easyTrack.length; i++) {
        for (j = 0; j < 38; j++) {
            let tile = document.createElement("div");
            tile.style.top = i * 21 + "px";
            tile.style.left = j * 21+ "px";
            tile.className = "tile";
            if (this.easyTrack[i][j] === 2) {
                tile.classList.add("grass");
            } else if (this.easyTrack[i][j] === 0) {
                tile.classList.add("track");
            } else if (this.easyTrack[i][j] === 1){
                tile.classList.add("wall")
            } else if (this.easyTrack[i][j] ===3){
                tile.classList.add("finish");
            }
            WorldRacer2020.track_container.append(tile)
        }
    }
},

  //if car hits track - maybe be relpaced with distance
  collision: function () {
    for(i = 0; i < easyTrack.length; i++){
      for(j = 0; j< 38; j++){
        if (this.car){
        }
      }
    }
  },
//notes 
 // 0 = race track, 1 = wall, 2 = grass
    //if (this.raceTrackArray1 == true){
     //if(raceTrackArray2 == true && raceTrackArray1 == false && 
    //raceTrackArray3 == false){

    //this.raceSquare = track_container.children;
    //this.wallSquare = track_container.children;
    //this.grassSquare = track_container.children;

  renderOval: function () {
    // 0 = race track, 1 = wall, 2 = grass
    for (i = 0; i < this.ovalTrack.length; i++) {
      if (this.ovalTrack[i][2] === 0) {
        let raceSquare = document.createElement("div")
        raceSquare.className = "race_square";
        this.easy_track_container.appendChild(raceSquare);
      }
      if (this.ovalTrack[i][2] === 1) {
        let wallSquare = document.createElement("div")
        wallSquare.className = "wall_square";
        this.easy_track_container.appendChild(wallSquare);
      }
      if (this.ovalTrack[i][2] === 2) {
        let grassSquare = document.createElement("div")
        grassSquare.className = "grass_square";
        this.easy_track_container.appendChild(grassSquare);
      }
      if (this.ovalTrack[i][2] === 3) {
        let finishSquare = document.createElement("div")
        finishSquare.className = "finish_square";
        this.easy_track_container.appendChild(finishSquare)
      }
    }
  },

  renderEasy: function () {
    // 0 = race track, 1 = wall, 2 = grass 3 = finish
    for (i = 0; i < this.easyTrack.length; i++) {
      if (this.easyTrack[i][0] === 0) {
        let raceSquare = document.createElement("div")
        raceSquare.className = "race_square";
        this.easy_track_container.appendChild(raceSquare);
      }
      if (this.easyTrack[i][0] === 1) {
        let wallSquare = document.createElement("div")
        wallSquare.className = "wall_square";
        this.easy_track_container.appendChild(wallSquare);
      }
      if (this.easyTrack[i][0] === 2) {
        let grassSquare = document.createElement("div")
        grassSquare.className = "grass_square";
        this.easy_track_container.appendChild(grassSquare);
      }
      if (this.easyTrack[i][0] === 3) {
        let finishSquare = document.createElement("div")
        finishSquare.className = "finish_square";
        this.easy_track_container.appendChild(finishSquare)
      }
    }
  },

  renderMed: function () {
    // 0 = race track, 1 = wall, 2 = grass 3 = finish
    for (i = 0; i < this.medTrack.length; i++) {
      if (this.medTrack[i][0] === 0) {
        let raceSquare = document.createElement("div")
        raceSquare.className = "race_square";
        this.hard_track_container.appendChild(raceSquare);
      }
      if (this.medTrack[i][0] === 1) {
        let wallSquare = document.createElement("div")
        wallSquare.className = "wall_square";
        this.hard_track_container.appendChild(wallSquare);
      }
      if (this.medTrack[i][0] === 2) {
        let grassSquare = document.createElement("div")
        grassSquare.className = "grass_square";
        this.hard_track_container.appendChild(grassSquare);
      }
      if (this.medTrack[i][0] === 3) {
        let finishSquare = document.createElement("div")
        finishSquare.className = "finish_square";
        this.hard_track_container.appendChild(finishSquare)
      }
    }
  },

  //begins car movement and timer -- moves to new page which moves car and timer
  startRace: function () {
    this.startRacing.onclick = some_Function(); 
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
}

WorldRacer2020.init();