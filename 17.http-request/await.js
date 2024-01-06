const axios = require('axios')

// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets")
// }

// getPlanets().then((res) => {
//   console.log(res.data)
// })

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets")
  console.log(res.data)
}

getPlanets().catch((err) => {
  console.log("IN CATCH!")
  console.log(err)

})

// async function getAllPlanets() {
//   try {
//     const res = await axios.get("https://swapi.dev/api/planets")
//     console.log(res.data)
//   } catch(err) {
//     console.log("in catch")
//     console.log(err)
//   }
// }

// getAllPlanets()