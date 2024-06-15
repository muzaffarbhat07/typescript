function identitiy1(val: boolean | number): boolean | number {
  return val
}

//making it general
function identitiy2(val: any): any {
  return val
}
// but this can have problems, it can accept string but return number

function identitiy3<Type>(val: Type): Type {
  return val
}
//now once u pass an arg, both arg type and return type is locked

identitiy3(3)
identitiy3("3")
identitiy3(true)

//short-cut: it can be any letter
function identitiy4<T>(val: T): T {
  return val
}


interface Bottle {
  brand: string,
  type: number
}

//syntax if u r passing own data types
identitiy4<Bottle>({brand: "aqua", type: 4})


//arrays in generics
function getSearchProducts<T>(products: T[]): T {
  //do some operations
  const foundIndex = 3
  return products[foundIndex]
}

//arrow functions
const getMoreSearchProducts = <T,>(products: T[]): T => {
  //do some operations
  const foundIndex = 4
  return products[foundIndex]
}



//objects
function anotherFn<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2
  }
}

anotherFn(2, "abc")

interface Database {
  connection: string
  username: string
  password: string
}

function anotherFn2<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2
  }
}

// anotherFn2(2, "abc") //np
// anotherFn2(4, {})



//classes
interface Quiz {
  name: string
  type: string
}

interface Course {
  name: string
  author: string
  subject: string
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
