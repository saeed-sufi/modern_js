// import axios from 'axios'
const axios = require("axios")

const fetchNext = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url)
}

const printPlanets = ({ data }) => {
  for (let planet of data.results) {
    console.log(planet.name)
  }
  return fetchNext(data.next)
}

fetchNext()
  .then(printPlanets)
  .then(printPlanets)
  .then(printPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err)
  })
