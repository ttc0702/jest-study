import axios from 'axios'

const runCallback = (cb, n) => {
  cb(n)
}

const getData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}

const getNumber = () => {
  return 123
}

export {
  runCallback,
  getData,
  getNumber
}