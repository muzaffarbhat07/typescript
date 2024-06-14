enum SeatChoice {
  AISLE, //by default it starts from 0. we can initialize it with any other value
  MIDDLE,
  WINDOW
}

const mbSeat = SeatChoice.AISLE;

enum SeatChoice2 {
  AISLE = 22,
  MIDDLE = 48,
  WINDOW
}

enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE = 48,
  WINDOW
}

// enum SeatChoice4 {
//   AISLE = "aisle",
//   MIDDLE = "middle",
//   WINDOW //empty not allowed in case of string previous value
// }

enum SeatChoice5 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window"
}

//if u write just enum it generates a lot of js code. so we use const before enum

const enum SeatChoice6 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window"
}

export {}