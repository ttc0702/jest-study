const getData = () => {
  return new Promise((resolved, reject) => {
    resolved({
      data: 'hello'
    })
  })
}

export {
  getData
}