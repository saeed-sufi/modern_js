function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  
  // this.rgb = function () {
  //   const { r, g, b } = this 
  //   return `rgb(${r}, ${g}, ${b})`
  // }
}

Color.prototype.rgb = function () {
  const { r, g, b } = this 
  return `rgb(${r}, ${g}, ${b})`
}

/* 
 the new keyword:
  1- Creates a blank , plain JS object,
  2- Liksthis object to another object,
  3- Passes the newly created object from Step 1 as the this context,
  4- Returns this if the function doesn't return its own object

*/

/* 
  unlike the factory functions, we can now add methods to the prototype of the object not to the individual objects (its instances) directly. 
*/
const col = new Color(2,3,3)
const col2 = new Color(2,3,3)
console.log(col.rgb === col2.rgb)