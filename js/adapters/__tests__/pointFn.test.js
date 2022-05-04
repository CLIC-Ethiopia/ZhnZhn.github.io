"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _pointFn = require("../pointFn");

var _Color = _interopRequireDefault(require("../../constants/Color"));

describe('crVolumePoint', () => {
  const fn = _pointFn.crVolumePoint;
  const _p = {
    date: 12345,
    volume: 10
  };
  const option = {
    _high: 2.2,
    _low: 0.8
  };
  it('should cr volume point with option', () => {
    expect(fn({ ..._p,
      open: 1,
      close: 2,
      option
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GREEN,
      _open: 1,
      _close: 2,
      ...option
    });
    expect(fn({ ..._p,
      open: 2,
      close: 1,
      option
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.RED,
      _open: 2,
      _close: 1,
      ...option
    });
    expect(fn({ ..._p,
      open: 2,
      close: 2,
      option
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GRAY,
      _open: 2,
      _close: 2,
      ...option
    });
  });
  it('should cr point C.GRAY for open falsy edge case', () => {
    expect(fn({ ..._p,
      open: null,
      close: 2
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GRAY,
      _open: null,
      _close: 2
    });
    expect(fn({ ..._p,
      open: void 0,
      close: 2
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GRAY,
      _open: void 0,
      _close: 2
    });
    expect(fn({ ..._p,
      open: 0,
      close: 2
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GRAY,
      _open: 0,
      _close: 2
    });
    expect(fn({ ..._p,
      open: NaN,
      close: 2
    })).toEqual({
      x: _p.date,
      y: _p.volume,
      color: _Color.default.GRAY,
      _open: NaN,
      _close: 2
    });
  });
});
describe('crAthPoint', () => {
  const fn = _pointFn.crAthPoint;
  const _p = {
    date: 12345
  };
  it('should cr ath point', () => {
    const _upBy10 = {
      close: 100,
      open: 110
    };
    expect(fn({ ..._p,
      ..._upBy10
    })).toEqual({
      x: _p.date,
      y: 10,
      ..._upBy10,
      color: _Color.default.GREEN
    });
    const _downBy10 = {
      close: 100,
      open: 90
    };
    expect(fn({ ..._p,
      ..._downBy10
    })).toEqual({
      x: _p.date,
      y: 10,
      ..._downBy10,
      color: _Color.default.RED
    });
    const _equal = {
      close: 100,
      open: 100
    };
    expect(fn({ ..._p,
      ..._equal
    })).toEqual({
      x: _p.date,
      y: 0,
      ..._equal,
      color: _Color.default.GRAY
    });
  });
  it('should return point with y=0 for falsy prevClose', () => {
    const _pUndef = {
      close: void 0,
      open: 100
    };
    expect(fn({ ..._p,
      ..._pUndef
    })).toEqual({
      x: _p.date,
      y: 0,
      ..._pUndef,
      color: _Color.default.GRAY
    });
    const _pNull = {
      close: null,
      open: 100
    };
    expect(fn({ ..._p,
      ..._pNull
    })).toEqual({
      x: _p.date,
      y: 0,
      ..._pNull,
      color: _Color.default.GRAY
    });
    const _pZero = {
      close: 0,
      open: 100
    };
    expect(fn({ ..._p,
      ..._pZero
    })).toEqual({
      x: _p.date,
      y: 0,
      ..._pZero,
      color: _Color.default.GRAY
    });
  });
  it('should return point with color=C.WHITE && open=Unknown for falsy open', () => {
    expect(fn({ ..._p,
      close: 100,
      open: null
    })).toEqual({
      x: _p.date,
      y: 0,
      close: 100,
      open: 'Unknown',
      color: _Color.default.WHITE
    });
    expect(fn({ ..._p,
      close: 100,
      open: 0
    })).toEqual({
      x: _p.date,
      y: 0,
      close: 100,
      open: 'Unknown',
      color: _Color.default.WHITE
    });
  });
});
//# sourceMappingURL=pointFn.test.js.map