const timer = (cb) => {
  setTimeout(() => {
    cb()
    setTimeout(() => {
      cb()
    }, 3000)
  }, 3000)
}

export {
  timer
}