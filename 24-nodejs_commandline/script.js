let count = 0

module.exports = {

  increamentCounter () {
    count = count + 1
  },

  getCounter () {
    return count
  }

}