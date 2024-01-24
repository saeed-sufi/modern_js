
const searchField = document.querySelector("#searchField")

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: '392d6eea',
      s: searchTerm
    }
  })

  if (response.data.Error) {
    return []
  }

  return response.data.Search
}

const debounce = (func, delay = 800) => {

  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

const onInput = async event => {
  const movies = await fetchData(event.target.value)
  for (let movie of movies) {
    console.log(movie)
  }
}

searchField.addEventListener('input', debounce(onInput))