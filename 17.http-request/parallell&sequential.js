const axios = require('axios')

// Sequential Requests
async function get3pokem() {
  const res0 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const res1= await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const res2 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(res0.data.name)
  console.log(res1.data.name)
  console.log(res2.data.name)
}


// Parallel Requests
async function get3pokemParallel() {
  const prom0 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/3")

  // const poke0 = await prom0
  // const poke1 = await prom1
  // const poke2 = await prom2

  // console.log(poke0.data.name)
  // console.log(poke1.data.name)
  // console.log(poke2.data.name)

  const results = await Promise.all([prom0, prom1, prom2])
  for (let pokeman of results) {
    console.log(pokeman.data.name)
  }
} 
get3pokemParallel()