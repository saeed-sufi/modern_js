"use strict"

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Saeed" },
          { id: 5, username: "Neda" },
          { id: 2, username: "Kian" },
        ],
        "/users/1": {
          id: 1,
          username: "Saeed",
          upvotes: 340,
          topPostId: 453234,
        },
        "/users/5": {
          id: 5,
          username: "Neda",
          upvotes: 33,
          topPostId: 352234,
        },
        "/posts/453234": {
          id: 453234,
          title: "Ladies and Gentlemen, Hola!",
        },
        "/about": "This is about page!",
      }

      const data = pages[url]

      if (data) {
        resolve({ status: 200, data })
      } else {
        reject({ status: 404 })
      }
    }, 1000)
  })
}

fakeRequest("/users")
  .then((res) => {
    console.log(res.status)
    const id = res.data[0].id
    return fakeRequest(`/users/${id}`)
  })
  .then((res) => {
    const postId = res.data.topPostId
    return fakeRequest(`/posts/${postId}`)
  })
  .then((res) => {
    console.log(res.data.title)
  })
  .catch((err) => {
    console.log('Oh No!', err)
  })
