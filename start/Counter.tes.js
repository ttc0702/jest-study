import Counter from './Counter'

let counter = null

beforeAll(() => {
  console.log('beforeAll')
})

beforeEach(() => {
  console.log('beforeEach')
  counter = new Counter()
})

afterEach(() => {
  console.log('afterEach')
})

afterAll(() => {
  console.log('afterAll')
})

describe('测试增加的相关代码', () => {
  test.only('测试 Counter 中的 addOne 方法', () => {
    console.log('test1')
    counter.addOne()
    expect(counter.number).toBe(1)
  })
  
  test('测试 Counter 中的 addTwo 方法', () => {
    console.log('test1')
    counter.addTwo()
    expect(counter.number).toBe(2)
  })
})

describe('测试减少的相关代码', () => {
  test('测试 Counter 中的 minusOne 方法', () => {
    console.log('test2')
    counter.minusOne()
    expect(counter.number).toBe(-1)
  })
  
  test('测试 Counter 中的 minusTwo 方法', () => {
    console.log('test2')
    counter.minusTwo()
    expect(counter.number).toBe(-2)
  })
})