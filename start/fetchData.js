import axios from 'axios'

const fetchData = (fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
  // axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
  //   fn(res.data)
  // })
}

export {
  fetchData
}