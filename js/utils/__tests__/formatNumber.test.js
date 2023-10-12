/**
 * @jest-environment jsdom
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _formatNumber = _interopRequireDefault(require("../formatNumber"));
describe("formatNumber", () => {
  test("should return str 0.00 for not number", () => {
    expect((0, _formatNumber.default)(NaN)).toBe("0.00");
    expect((0, _formatNumber.default)()).toBe("0.00");
    expect((0, _formatNumber.default)(null)).toBe("0.00");
    expect((0, _formatNumber.default)("str")).toBe("0.00");
    expect((0, _formatNumber.default)(true)).toBe("0.00");
    expect((0, _formatNumber.default)({})).toBe("0.00");
  });
  test("should return same as str for -0.01<value<0.01", () => {
    expect((0, _formatNumber.default)(0.009)).toBe("0.009");
    expect((0, _formatNumber.default)(0.000009)).toBe("0.000009");
    expect((0, _formatNumber.default)(-0.009)).toBe("-0.009");
    expect((0, _formatNumber.default)(-0.000009)).toBe("-0.000009");
  });
  test("should return str rounded by 2 or 4 for -1<value<1 && not -0.01<value<0.01", () => {
    expect((0, _formatNumber.default)(0.1234)).toBe("0.1234");
    expect((0, _formatNumber.default)(0.123)).toBe("0.123");
    expect((0, _formatNumber.default)(0.12)).toBe("0.12");
    expect((0, _formatNumber.default)(0.1)).toBe("0.1");
    expect((0, _formatNumber.default)(0.12345)).toBe("0.1235");
    expect((0, _formatNumber.default)(0.123456)).toBe("0.1235");
  });
  test("should return str rounded by 2 for -100000<value<100000 && not -1>value<1", () => {
    expect((0, _formatNumber.default)(2)).toBe("2");
    expect((0, _formatNumber.default)(2.0)).toBe("2");
    expect((0, _formatNumber.default)(2.1)).toBe("2.1");
    expect((0, _formatNumber.default)(2.12)).toBe("2.12");
    expect((0, _formatNumber.default)(2.123)).toBe("2.12");
    expect((0, _formatNumber.default)(2.1234)).toBe("2.12");
    expect((0, _formatNumber.default)(99999.0)).toBe("99 999");
    expect((0, _formatNumber.default)(99999.00)).toBe("99 999");
    expect((0, _formatNumber.default)(99999.01)).toBe("99 999.01");
    expect((0, _formatNumber.default)(-99999.01)).toBe("-99 999.01");
  });
  test("should return str rounded by 0 for value<=-100000 || value>=100000", () => {
    expect((0, _formatNumber.default)(100000.01)).toBe("100 000");
    expect((0, _formatNumber.default)(-100000.01)).toBe("-100 000");
    expect((0, _formatNumber.default)(100000)).toBe("100 000");
    expect((0, _formatNumber.default)(-100000)).toBe("-100 000");
  });
  test("should use isSamePrecision parameter", () => {
    expect((0, _formatNumber.default)(1.146)).toBe("1.15");
    expect((0, _formatNumber.default)(1.144)).toBe("1.14");
    expect((0, _formatNumber.default)(1.146, true)).toBe("1.146");
    expect((0, _formatNumber.default)(1.144, true)).toBe("1.144");
  });
});
//# sourceMappingURL=formatNumber.test.js.map