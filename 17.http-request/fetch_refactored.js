const checkStatusAndParse = (res) => {
    if (!res.ok) {
      throw new Error(`Status Code Error: ${res.status}`)
    }
    return res.json()
}

const printPlanets = (data) => {
  console.log("Fetched the next 10 planets: ")
  for (let planet of data.results) {
    console.log(planet.name)
  }
  return Promise.resolve(data.next)
}

const fetchNext10 = (url = "https://swapi.dev/api/planets") => {
  return fetch(url)
}

fetchNext10()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNext10)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNext10)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log(`OOOps ${err}`)
  })

