const user: (string | number)[] = [1, "muz"];

const tUser1: [string, number] = ["muz", 1]
// const tUser: [string, number] = [1, "muz"];

let rgb: [number, number, number] = [205, 143, 185];

type UserT = [number, string]
const newUser: UserT = [1, "muz"];
newUser[1] = "m";
newUser.push("m"); //weird
newUser.push(1); //weird
// newUser.push(false); //np

export {}