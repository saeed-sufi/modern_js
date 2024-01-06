btn = document.querySelector("button")

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`
//       setTimeout(() => {
//         btn.style.transform = `translateX(300px)`
//       }, 1000)
//   }, 1000)
// }, 1000)

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  const currRight = element.getBoundingClientRect().right
  const currLeft = element.getBoundingClientRect().left
  const bodyBoundry = document.body.clientWidth

  console.log(`currentLeft = ${currLeft} \ncurrentRight = ${currRight} `)

  if (currRight + amount > bodyBoundry) {
    onFailure(currRight, amount, bodyBoundry)
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${amount + currLeft}px)`
      onSuccess()
    }, delay)
  }
}

const moveXPromise = (element, amount, delay) => {
  const currRight = element.getBoundingClientRect().right
  const currLeft = element.getBoundingClientRect().left
  const bodyBoundry = document.body.clientWidth

  console.log(
    `currentLeft = ${currLeft} \ncurrentRight = ${currRight} \nbodyBoundry = ${bodyBoundry} `
  )

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currRight + amount > bodyBoundry) {
        let error = `next right position would be: ${currRight} + ${amount} which is bigger than screenwidth of ${bodyBoundry}. So, we can move no further.`

        reject(error)
      } else {
        element.style.transform = `translateX(${amount + currLeft}px)`

        resolve()
      }
    }, delay)
  })
}

async function animateRight(el,  amn) {
  await moveXPromise(el, amn,1000)
  await moveXPromise(el, amn,1000)
  await moveXPromise(el, amn,1000)
  await moveXPromise(el, amn,1000)
  moveXPromise(el, amn, 1000)
}

animateRight(btn, 100).catch((err) => {
  console.log(err)
  animateRight(btn, -100)
})
// moveXPromise(btn, 100, 1000)
//   .then(() => moveXPromise(btn, 100, 1000))
//   .then(() => moveXPromise(btn, 100, 1000))
//   .then(() => moveXPromise(btn, 100, 1000))
//   .then(() => moveXPromise(btn, 200, 1000))
//   .catch((error) => {
//     console.log(error)
//   })

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 200, 1000)
//     })
//   })
// })

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     moveX(
//       btn,
//       100,
//       1000,
//       () => {
//         moveX(
//           btn,
//           100,
//           1000,
//           () => {
//             moveX(
//               btn,
//               200,
//               1000,
//               () => {
//                 console.log("Hola")
//               },
//               (currRight, amount, bodyBoundry) => {
//                 console.log(
//                   `next right position would be: ${currRight} + ${amount} which is bigger than screenwidth of ${bodyBoundry}. So, we can move no further.`
//                 )
//               }
//             )
//           },
//           (currRight, amount, bodyBoundry) => {
//             console.log(
//               `next right position would be: ${currRight} + ${amount} which is bigger than screenwidth of ${bodyBoundry}. So, we can move no further.`
//             )
//           }
//         )
//       },
//       (currRight, amount, bodyBoundry) => {
//         console.log(
//           `next right position would be: ${currRight} + ${amount} which is bigger than screenwidth of ${bodyBoundry}. So, we can move no further.`
//         )
//       }
//     )
//   },
//   (currRight, amount, bodyBoundry) => {
//     console.log(
//       `next right position would be: ${currRight} + ${amount} which is bigger than screenwidth of ${bodyBoundry}. So, we can move no further.`
//     )
//   }
// )
