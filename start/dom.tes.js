import { addDivToBody } from './dom'
import $ from 'jquery'

test('测试 addDivToBody', () => {
  addDivToBody()
  expect($('body').find('div').length).toBe(1)
})

// node 不具备 dom api
// jest 在 node 环境下模拟了一套 dom 的 api，所以可以使用 jest 测试 dom 操作