import { fetchData } from './fetchData'

// test('fetchData 返回结果为 {success: true}', (done) => {
//   fetchData(data => {
//     expect(data).toEqual({ success: true })
//     done()
//   })
// })

// test('fetchData 返回结果为 {success: true}', () => {
//   // 这里写 return，可以告诉 Jest 等待异步操作完成，与上面 done 的效果相同
//   return fetchData().then(res => {
//     expect(res.data).toEqual({ success: true })
//   })
// })

// test('fetchData 返回结果为 {success: true}', async () => {
//   // 也可以写成 async，await 的形式，效果与 return一样
//   const res = await fetchData()
//   expect(res.data).toEqual({ success: true })
// })

// test('fetchData 返回结果为 {success: true}', () => {
//   // .resolves 类似 await，可以取出 Promise 中的值
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData 返回结果为 {success: true}', async () => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// -----------------

test('fetchData 返回结果为 404', () => {
  // 异步函数使用 .catch() 捕获异常时，如果函数返回了数据，没有抛出异常，则 .catch() 中的代码不会执行，测试用例可以正常通过。
  // 这里需要强制规定测试用例中 expect() 需要被执行的次数，如果没有执行指定的次数，则用例不通过。
  expect.assertions(1)

  return fetchData().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})

test('fetchData 返回结果为 404', async () => {
  expect.assertions(1)

  try {
    await fetchData()
  } catch (e) {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  }
})

test('fetchData 返回结果报错', () => {
  return expect(fetchData()).rejects.toThrow()
})


