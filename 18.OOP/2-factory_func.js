function makeColor(r, g, b) {
  const color = {}

  color.r = r 
  color.g = g 
  color.b = b 

  color.rgb = function () {
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b})`
  }

  return color
}

const firstColor = makeColor(34, 34, 255)
console.log(firstColor)
console.log(makeColor(2, 3, 3))

/* 
  What's wrong with creating objects using a factory function is that whenever we use it, it creates new copies of its methods! In other words,the methods are not defined on its prototype.
*/

const secondColor = makeColor(34, 34, 255)

console.log(secondColor.rgb === firstColor.rgb) // this returns false although we are accessing the same method of the object returned by the makeColor function.

console.log("sa".slice === "sa".slice) // However, this one returns true becaues the slice method is defined on the prototype of strings.


/* 
  This is why we need constructor functions!

*/