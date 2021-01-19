import { generateConfig, generateConfig1 } from "./snapshot";

test("测试 generateConfig 函数", () => {
  // expect(generateConfig()).toEqual({
  //   servre: 'http://localhost',
  //   port: 10010
  // })

  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 10010,
      "servre": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 generateConfig 函数1", () => {
  expect(generateConfig1()).toMatchSnapshot({
    time: expect.any(Date),
  });
});
