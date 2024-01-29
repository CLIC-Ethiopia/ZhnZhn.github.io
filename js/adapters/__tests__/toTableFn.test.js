"use strict";

var _toTableFn = require("../toTableFn");
describe("crNameProps", () => {
  const fn = _toTableFn.crNameProps;
  test("should return table name props", () => {
    expect(fn("Link", "url", true)).toStrictEqual({
      name: "Link",
      pn: "url",
      isHide: true
    });
    expect(fn("Link", "url")).toStrictEqual({
      name: "Link",
      pn: "url",
      isHide: void 0
    });
    expect(fn("Url", true)).toStrictEqual({
      name: "Url",
      pn: "url",
      isHide: true
    });
    expect(fn("Url")).toStrictEqual({
      name: "Url",
      pn: "url",
      isHide: void 0
    });
  });
});
describe("crNumberProps", () => {
  const fn = _toTableFn.crNumberProps;
  test("should return table number props", () => {
    expect(fn()).toStrictEqual({
      toN: [void 0],
      isF: true,
      style: {
        fontWeight: 'bold'
      }
    });
    expect(fn(2)).toStrictEqual({
      toN: [2],
      isF: true,
      style: {
        fontWeight: 'bold'
      }
    });
  });
});
//# sourceMappingURL=toTableFn.test.js.map