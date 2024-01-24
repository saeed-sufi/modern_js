const counter = require('./script')
const js = require('./js')


console.log(counter.getCounter())
counter.increamentCounter()
console.log(counter.getCounter())
const counter2 = require('./script')
console.log(counter2.getCounter())