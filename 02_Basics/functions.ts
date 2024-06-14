function addTwo(num) {
  num.toUpperCase()
  return num + 2
}

addTwo(5)
addTwo("5")


function addTwoCorrect(num: number) {
  // num.toUpperCase()
  return num + 2
}

addTwoCorrect(5)
// addTwoCorrect("5")

function signUpUser(name, email, isPaid) {}

signUpUser(1, 2, 3);

function signUpUserCorrect(name: string, email: string, isPaid: boolean) {}

signUpUserCorrect("Muzaffar", "muzaffar@gmail.com", true);

//DEFAULT VALUE
const signInUser = (name: string, email: string, isPaid: boolean = false) => {}

signInUser("Muzaffar", "muzaffar@gmail.com");


//RETURN TYPE
function getAddVal(num: number): number{
  // return "hello"
  return num + 2;
}
let val = 6 + getAddVal(5)

//RETURN TYPE IN ARROW FUNCTIONS
const getHello = (s: string): string => {
  return "";
}


//'never' means never returning any value. Used when fn thows an exception or terminates the program
const handleError = (errmsg: string): never => {
  throw Error(errmsg);
}

export {}