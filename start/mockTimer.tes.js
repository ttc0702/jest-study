import { timer } from './mockTimer'

// test('timer 测试', (done) => {
//   timer(() => {
//     expect(1).toBe(1)
//     done()
//   })
// })
beforeEach(() => {
  jest.useFakeTimers()
})

test('timer 测试', () => {
  const fn = jest.fn()
  timer(fn)
  // jest.runAllTimers()
  // jest.runOnlyPendingTimers()

  // 快进 3s
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})

test('timer 测试2', () => {
  const fn = jest.fn()
  timer(fn)

  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})