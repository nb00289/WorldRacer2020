WorldRacer2020 = {
  track_container: document.getElementById("Grid"),
  //hard_track_container: document. getElementById("hardGrid"),
  ovalTrack: [
    [0, 0, 2], [0, 1, 2], [0, 2, 2], [0, 3, 2], [0, 4, 2], [0, 5, 2], [0, 6, 2], [0, 7, 2], [0, 8, 2], [0, 9, 2], [0, 10, 2],
    [0, 11, 2], [0, 12, 2], [0, 13, 2], [0, 14, 2], [0, 15, 2], [0, 16, 2], [0, 17, 2], [0, 18, 2], [0, 19, 2], [0, 20, 2],
    [0, 21, 2], [0, 22, 2], [0, 23, 2], [0, 24, 2], [0, 25, 2], [0, 26, 2], [0, 27, 2], [0, 28, 2], [0, 29, 2], [0, 30, 2],
    [0, 31, 2], [0, 32, 2], [0, 33, 2], [0, 34, 2], [0, 35, 2], [0, 36, 2], [0, 37, 2],
    //1
    [1, 1, 2], [1, 2, 2], [1, 3, 2], [1, 4, 2], [1, 5, 2], [1, 6, 1], [1, 7, 1], [1, 8, 1], [1, 9, 1], [1, 10, 1],
    [1, 11, 1], [1, 12, 1], [1, 13, 1], [1, 14, 1], [1, 15, 1], [1, 16, 1], [1, 17, 1], [1, 18, 1], [1, 19, 1], [1, 20, 1],
    [1, 21, 1], [1, 22, 1], [1, 23, 1], [1, 24, 1], [1, 25, 1], [1, 26, 1], [1, 27, 1], [1, 28, 1], [1, 29, 1], [1, 30, 1],
    [1, 31, 1], [1, 32, 1], [1, 33, 1], [1, 34, 2], [1, 35, 2], [1, 36, 2], [1, 37, 2], [1, 38, 2],
    //2
    [2, 1, 2], [2, 2, 2], [2, 3, 2], [2, 4, 2], [2, 5, 1], [2, 6, 1], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 18, 0], [2, 19, 0], [2, 20, 0],
    [2, 21, 0], [2, 22, 0], [2, 23, 0], [2, 24, 0], [2, 25, 0], [2, 26, 0], [2, 27, 0], [2, 28, 0], [2, 29, 0], [2, 30, 0],
    [2, 31, 0], [2, 32, 0], [2, 33, 1], [2, 34, 1], [2, 35, 2], [2, 36, 2], [2, 37, 2], [2, 38, 2],
    //3
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 1], [3, 5, 1], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 1], [3, 5, 1], [3, 6, 2], [3, 7, 2], [3, 8, 2],
    //4
    [3, 1, 2], [3, 2, 2], [3, 3, 1], [3, 4, 1], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 1], [3, 6, 1], [3, 7, 2], [3, 8, 2],
    //5
    [3, 1, 2], [3, 2, 1], [3, 3, 1], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 1], [3, 7, 1], [3, 8, 2],
    //6
    [3, 1, 1], [3, 2, 1], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 1], [3, 8, 1],
    //7
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 1],
    [2, 11, 1], [2, 12, 1], [2, 13, 1], [2, 14, 1], [2, 15, 1], [2, 16, 1], [2, 17, 1], [2, 8, 1], [2, 9, 1], [3, 0, 1],
    [3, 1, 1], [3, 2, 1], [3, 3, 1], [3, 4, 1], [3, 5, 1], [3, 6, 1], [3, 7, 1], [3, 8, 1], [3, 9, 1], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //8
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 1], [3, 10, 1],
    [2, 11, 2], [2, 12, 2], [2, 13, 2], [2, 14, 2], [2, 15, 2], [2, 16, 2], [2, 17, 2], [2, 8, 2], [2, 9, 2], [3, 0, 2],
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 2], [3, 5, 2], [3, 6, 2], [3, 7, 2], [3, 8, 2], [3, 9, 1], [3, 30, 1],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //9
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 1], [3, 10, 1],
    [2, 11, 2], [2, 12, 2], [2, 13, 2], [2, 14, 2], [2, 15, 2], [2, 16, 2], [2, 17, 2], [2, 8, 2], [2, 9, 2], [3, 0, 2],
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 2], [3, 5, 2], [3, 6, 2], [3, 7, 2], [3, 8, 2], [3, 9, 1], [3, 30, 1],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //10
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 1], [3, 10, 1],
    [2, 11, 2], [2, 12, 2], [2, 13, 2], [2, 14, 2], [2, 15, 2], [2, 16, 2], [2, 17, 2], [2, 8, 2], [2, 9, 2], [3, 0, 2],
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 2], [3, 5, 2], [3, 6, 2], [3, 7, 2], [3, 8, 2], [3, 9, 1], [3, 30, 1],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //11
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 1], [3, 10, 1],
    [2, 11, 2], [2, 12, 2], [2, 13, 2], [2, 14, 2], [2, 15, 2], [2, 16, 2], [2, 17, 2], [2, 8, 2], [2, 9, 2], [3, 0, 2],
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 2], [3, 5, 2], [3, 6, 2], [3, 7, 2], [3, 8, 2], [3, 9, 1], [3, 30, 1],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //12
    [3, 1, 1], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 1],
    [2, 11, 1], [2, 12, 1], [2, 13, 1], [2, 14, 1], [2, 15, 1], [2, 16, 1], [2, 17, 1], [2, 8, 1], [2, 9, 1], [3, 0, 1],
    [3, 1, 1], [3, 2, 1], [3, 3, 1], [3, 4, 1], [3, 5, 1], [3, 6, 1], [3, 7, 1], [3, 8, 1], [3, 9, 1], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1],
    //13
    [3, 1, 1], [3, 2, 1], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 3], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 1], [3, 8, 1],
    //5
    [3, 1, 2], [3, 2, 1], [3, 3, 1], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 3], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 1], [3, 7, 1], [3, 8, 2],
    //4
    [3, 1, 2], [3, 2, 2], [3, 3, 1], [3, 4, 1], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 3], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 1], [3, 6, 1], [3, 7, 2], [3, 8, 2],
    //3
    [3, 1, 2], [3, 2, 2], [3, 3, 2], [3, 4, 1], [3, 5, 1], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 3], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [3, 0, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 30, 0],
    [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 1], [3, 5, 1], [3, 6, 2], [3, 7, 2], [3, 8, 2],
    //2
    [2, 1, 2], [2, 2, 2], [2, 3, 2], [2, 4, 2], [2, 5, 1], [2, 6, 1], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 0],
    [2, 11, 0], [2, 12, 0], [2, 13, 3], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 8, 0], [2, 9, 0], [2, 0, 0],
    [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 30, 0],
    [2, 1, 0], [2, 2, 0], [2, 3, 1], [2, 4, 1], [2, 5, 2], [2, 6, 2], [2, 7, 2], [2, 8, 2],
    //1
    [1, 1, 2], [1, 2, 2], [1, 3, 2], [1, 4, 2], [1, 5, 2], [1, 6, 1], [1, 7, 1], [1, 8, 1], [1, 9, 1], [1, 10, 1],
    [1, 11, 1], [1, 12, 1], [1, 13, 1], [1, 14, 1], [1, 15, 1], [1, 16, 1], [1, 17, 1], [1, 8, 1], [1, 9, 1], [1, 0, 1],
    [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1], [1, 8, 1], [1, 9, 1], [1, 30, 1],
    [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 2], [1, 5, 2], [1, 6, 2], [1, 7, 2], [1, 8, 2],
    //
    [0, 0, 2], [0, 1, 2], [0, 2, 2], [0, 3, 2], [0, 4, 2], [0, 5, 2], [0, 6, 2], [0, 7, 2], [0, 8, 2], [0, 9, 2], [0, 10, 2],
    [0, 11, 2], [0, 12, 2], [0, 13, 2], [0, 14, 2], [0, 15, 2], [0, 16, 2], [0, 17, 2], [0, 18, 2], [0, 19, 2], [0, 20, 2],
    [0, 21, 2], [0, 22, 2], [0, 23, 2], [0, 24, 2], [0, 25, 2], [0, 26, 2], [0, 27, 2], [0, 28, 2], [0, 29, 2], [0, 30, 2],
    [0, 31, 2], [0, 32, 2], [0, 33, 2], [0, 34, 2], [0, 35, 2], [0, 36, 2], [0, 37, 2],
  ],
  easyTrack: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2],

    [2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2],

    [2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],

    [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],

    //middle 
    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],

    [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],

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
    WorldRacer2020.createCar();
    WorldRacer2020.renderCar();
  },

  createCar: function () {
    let cardiv = document.createElement("div");
    cardiv.className = "car";
    this.track_container.appendChild(cardiv);
    let car = {
      x_pos: 200,
      y_pos: 300,
      x_velocity: 3,
      y_velocity: 3,
      element: cardiv,
    }
    return car;
  },

  renderCarOval: function () {
    for(i = 0; i < WorldRacer2020.ovalTrack; i++){
      console.log(car.x_pos = "", car.y_pos = "")
    }
  },

  moveCar: function () {
  },

  //if car hits track - maybe be relpaced with distance
  collision: function () {
    //for (i = 0; i < this.carArray; i++){
      //for (i = 0; i < this.raceTrackArray1; i++){
        //if (this.car){
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