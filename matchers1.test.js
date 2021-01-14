test('测试完全相同', () => {
  // toBe 称作匹配器（matchers）
  expect(1).toBe(1)
})
test('测试对象内容相同', () => {
  const a = { a: 0 }
  expect(a).toEqual({ a: 0 })
})