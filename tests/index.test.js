const proj4 = require('../src/index');

test('IAU:2015:49900 should be defined in proj4', () => {
  const crs = proj4.defs('IAU:2015:49900');
  expect(crs).toBeDefined();
});

test('IAU:2015:49910 should be defined in proj4', () => {
    const crs = proj4.defs('IAU:2015:49910');
    expect(crs).toBeDefined();
});

test('IAU:2015:49900 should transform to expected IAU:2015:49910 values', () => {
    const crs49900 = proj4.defs('IAU:2015:49900');
    const crs49910 = proj4.defs('IAU:2015:49910');
    var forward_in_49910 = proj4(crs49900, crs49910).forward([45.0, 45.0]);
    expect(forward_in_49910[0]).toBeCloseTo(2667361.3885487798, 6);
    expect(forward_in_49910[1]).toBeCloseTo(2667361.3885487798, 6);
});

  test('IAU:2015:49910 should transform to expected IAU:2015:49900 values', () => {
    const crs49900 = proj4.defs('IAU:2015:49900');
    const crs49910 = proj4.defs('IAU:2015:49910');
    var forward_in_49900 = proj4(crs49910, crs49900).forward([2667361.3885487798, 2667361.3885487798]);
    expect(forward_in_49900[0]).toBeCloseTo(45.0, 6);
    expect(forward_in_49900[1]).toBeCloseTo(45.0, 6);
});