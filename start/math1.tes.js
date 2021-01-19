// 使用 jest 进行测试，测试的方法必须是从模块中导出的
// 因为 jest 做的是单元测试（模块测试）和集成测试（多模块测试），
// 所以使用 jest，必须引入模块的概念
// const math = require('./math.js')
// const { add, minus } = math

// node 环境中只支持 commonjs 语法，不支持 es module 语法，要写成以下形式，需要安装 babel 对代码进行转化。

// 运行机制：
// jest 内部集成了一个插件 babel-jest，运行 npm run jest 时，babel-jest 会检测当前环境中是否安装了 babel-core，如果安装了，会去取 .babelrc 的配置，在运行测试之前，先将代码做一次编译。
import { add, minus } from '../math'

test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})
test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})
