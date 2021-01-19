test('测试完全相同', () => {
  // toBe 称作匹配器（matchers）
  expect(1).toBe(1)
})
test('equal', () => {
  const a = { a: 0 }
  expect(a).toEqual({ a: 0 })
})
