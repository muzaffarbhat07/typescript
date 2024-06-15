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