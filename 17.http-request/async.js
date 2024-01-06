async function hello() {
  return "Hi, Saeed"
}

hello().then((val) => {
  console.log(val)
})

// async function sum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw "you must insert numbers"
//   }

//   return a + b
// }

// sum(2, "e")
//   .then((val) => {
//     console.log(val)
//   })
//   .catch((err) => {
//     console.log("promise returned with this error: " + err)
//   })

function promiseSum(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject( "you must insert numbers")
      }
    let sum = a + b
    resolve(sum)
  })
}

promiseSum(3,'e').then((val) => {
  console.log(val)
}).catch((err) => {
  console.log(err)
})
