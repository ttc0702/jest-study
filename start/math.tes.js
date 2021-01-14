// let result = add(3, 7)
// let expected = 10

// if (result !== 10) {
//   throw Error(`3 + 7 应该等于 ${expected}, 但结果却是 ${result}`)
// }

// let result = add(3, 3)
// let expected = 0

// if (result !== 0) {
//   throw Error(`3 - 3 应该等于 ${expected}, 但结果却是 ${result}`)
// }

function expect(result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期值与实际值不相等，预期 ${actual}，结果 ${result}`)
      }
    }
  }
}

// expect(add(3, 3)).toBe(6)
// expect(minus(3, 3)).toBe(0)

function test(desc, fn) {
  try {
    fn()
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 未通过测试 ${e}`)
    // console.dir(e)
    // console.dir(e.name)
    // console.dir(e.message)
  }
}

test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})
test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

