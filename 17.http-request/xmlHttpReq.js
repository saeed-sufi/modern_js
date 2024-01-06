const firstReq = new XMLHttpRequest()
firstReq.addEventListener('load', function () {
  console.log("It worked!")
  const data = JSON.parse(this.responseText)
  for (let planet of data.results) {
    console.log(planet.name)
  }
})

firstReq.addEventListener('error', function () {
  console.log('error')
})

firstReq.open("GET", "https://swapi.dev/api/planets")
firstReq.send()
console.log('request sent.')