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
  protected _courseCount = 1
  readonly city: string = "kashmir"
  constructor(
    public email: string, 
    public name: string,
    private userId: number
  ) {
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum: number) {
    if(courseNum <= 1) {
      throw new Error("Course count should be more than 1")
    }

    this._courseCount = courseNum;
  }
}
const muzaffar2 = new User2("m@m.com", "muzaffar", 5465123)

class SubUser extends User2 {
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}
