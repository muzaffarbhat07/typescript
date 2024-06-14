interface User {
  readonly _id: number
  email: string
  userId: number
  googleId?: string
  // startTrial: () => string
  startTrial(): string
  getCoupon(couponname: string, value: number): number
}

//expanding interface: reopening of interface
interface User {
  githubToken: string
}

const muzaffar: User = {
  _id: 7,
  email: "m@m.com",
  userId: 15645421,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name, val) => {
    return 22;
  }
  // getCoupon: (name: "muzaffar", val: 18) => {
  //   return 22;
  // }
}

//inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const muzaffar2: Admin = {
  _id: 7,
  email: "m@m.com",
  userId: 15645421,
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name, val) => {
    return 22;
  }
  // getCoupon: (name: "muzaffar", val: 18) => {
  //   return 22;
  // }
}

// check docs for difference between interface and type

export {}