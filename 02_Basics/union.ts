let score: number | string = 22;
score = 33;
score = "55";

type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let muazffar: User | Admin = {name: "muz", id: 222};
muazffar = {username: "muza", id: 222}


//use case
function printId(id: string | number) {
  console.log(`id is ${id}`)
}
printId(2);
printId("3");

function handleId(id: string | number) {
  // id.toUpperCase();
  // id + 2;
  if(typeof id === 'string') {
    id.toUpperCase();
  } else {
    id + 2;
  }
  
  console.log(`id is ${id}`)
}

//arrays
const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (number | string)[] = [1, "2", 3];
const data3: Array<number | string> = [1, "2", 3];

//fixed values
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle";
// seatAllotment = "end"

export {}