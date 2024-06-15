function detectType(val: number | string) {
  if(typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3
}

function provideId(id: string | null) {
  if(!id) {
    console.log("Please provide if")
    return
  }
  id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
  if(strs) {
    //typeof (array of strings or even array) is object
    if (typeof strs === "object") {
      for(const s of strs) {
        console.log(s)
      }
    } else {
      console.log(strs)
    }
  }
}


interface User {
  name: string
  email: string
}
interface Admin {
  name: string
  email: string
  isAdmin: boolean
}

//in operator narrowing
function isAdminAccount(account: User | Admin) {
  // if(account.isAdmin) //np

  if("isAdmin" in account) {
    return account.isAdmin
  }
}

//instaneof narrowing: used with types created using 'new' keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}

//using type predicates
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined
}
function isFish2(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if(isFish(pet)) {
    pet //ts is still not sure whether pet is Fish or Bird because isFis returns boolean
    console.log("fish food")
  } else {
    pet //ts is still not sure whether pet is Fish or Bird
    console.log("bird food")
  }

  if(isFish2(pet)) {
    pet //now ts is sure because isFish2 returns Fish
    console.log("fish food")
  } else {
    pet
    console.log("bird food")
  }
}



//NOTE: CHECK DOCS FOR NARROWING


export {}