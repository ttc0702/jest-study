// import axios from 'axios'
import { runCallback, getData } from './mock'
const { getNumber } = jest.requireActual('./mock')
// jest.mock('axios')

// 自动到 __mocks__ 目录下找 mock.js
jest.mock('./mock')
// jest.unmock('./mock')

// test('测试 runCallback', () => {
//   const func = jest.fn(x => x)
//   func.mockReturnValueOnce(2)
//   runCallback(func, 1)
//   runCallback(func, 1)
//   expect(func).toBeCalled()
//   console.log(func.mock)
// })

// test('测试 getData', async () => {
//   axios.get.mockResolvedValue({data: 'hello'})
//   const res = await getData()
//   expect(res.data).toBe('hello')
// })

// test('测试 runCallback', () => {
//   const func = jest.fn()
//   func.mockImplementationOnce(x => x)
//   func.mockImplementationOnce(x => x * 2)
//   runCallback(func, 1)
//   runCallback(func, 2)
//   expect(func.mock.results[0].value).toBe(1)
//   expect(func.mock.results[1].value).toBe(4)
//   // expect(func).toBeCalledWith(2)
//   console.log(func.mock)
// })

test('测试 getData', async () => {
  const res = await getData()
  expect(res.data).toBe('hello')
})

test('测试 getNumber', async () => {
  expect(getNumber()).toBe(123)
})