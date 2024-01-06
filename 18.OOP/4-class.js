class Color {
  constructor(r, g, b) {
    this.r = r
    this.g = g 
    this.b = b
  }

  innerRGB() {
    const {r,g,b} = this
    return `${r}, ${g}, ${b}`
  }

  rgb() {
    return `rgb(${this.innerRGB()})`
  }
}

const col = new Color(4,4,4)

console.log(col.rgb())