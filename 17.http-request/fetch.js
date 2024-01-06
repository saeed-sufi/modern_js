fetch("https://swapi.dev/api/planets")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status Code Error: ${res.status}`)
    }
    return res.json()
  }).then((data) => {
    const filmURL = data.results[0].films[0]
    return fetch(filmURL)
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Status Code Error: ${res.status}`)
    }
    return res.json()
  }).then((res) => {
    console.log(res.title)
  })
  .catch((err) => {
    console.log(`OOOps ${err}`)
  })
