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

//NOTE: CHECK DOCS FOR NARROWING


export {}