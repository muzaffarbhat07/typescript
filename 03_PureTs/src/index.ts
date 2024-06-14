console.log("typescript is here")
console.log("typescript is amazing")


//CLASSES
class User {
  email: string
  name: string
  city: string = ""
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const muzaffar = new User("m@m.com", "muzaffar")
muzaffar.city = "kashmir"