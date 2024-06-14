function createUser({name: string, isPaid: boolean}){}

createUser({name:"muzaffar", isPaid: true})

//  WEIRD BEHAVIOUR
createUser({name:"muzaffar", isPaid: true, email: "muz@g.com"});
let newUser = {name:"muzaffar", isPaid: true, email: "muz@g.com"};
createUser(newUser);

// TYPE ALIASES
type User = {
  name: string;
  email: string;
  isPaid: boolean;
}
function loginUser(user: User): User {
  return user
}
const user = loginUser({name: "", email: "", isPaid: true})

//READONLY, OPTIONAL
type PaidUser = {
  readonly _id: string    // readonly
  name: string
  email: string
  isPaid: boolean
  cardNumber?: string     // optional
}

const myUser: PaidUser = {
  _id: "1234",
  name: 'Muzaffar',
  email: "m@m.in",
  isPaid: true
}

myUser.email = "m@m.com";
myUser._id = "345";

//COMBINING TYPES
type cardNumber = {
  cardnumber: string
}
type cardDate = {
  date: string
}
type cardDetails = cardNumber & cardDate & {
  cvv: number
}
const carddetails: cardDetails = {
  cardnumber: "1321546",
  date: "12/26",
  cvv: 235
}

export {}