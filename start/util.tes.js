// jest.mock 的第二个参数，相当于在 __mocks__ 文件夹下新建文件
jest.mock('./util', () => {
  const Util = jest.fn(() => {
    console.log('constructor')
  })
  Util.prototype.a = jest.fn(() => {
    console.log('a')
  })
  Util.prototype.b = jest.fn(() => {
    console.log('b')
  })
  return Util
})
import Util from './util'

let util = null
beforeEach(() => {
  util = new Util()
})

test('测试 util', () => {
  util.a()
  util.b()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})