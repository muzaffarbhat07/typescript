console.log("typescript is here")
console.log("typescript is amazing")


//CLASSES
class User {
  email: string
  private name: string
  readonly city: string = "kashmir"
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const muzaffar = new User("m@m.com", "muzaffar")
// muzaffar.city = "kashmir" //np
// muzaffar.name


//different syntax
class User2 {
  readonly city: string = "kashmir"
  constructor(
    public email: string, 
    public name: string,
    private userId: number
  ) {
  }
}
const muzaffar2 = new User2("m@m.com", "muzaffar", 5465123)