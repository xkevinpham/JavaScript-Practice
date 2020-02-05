const fibonacci = require('./fibonacci')

describe('fibonacci', function() {
  it('works', function() {
    expect(fibonacci(4)).toEqual(3);
  });
  xit('works', function() {
    expect(fibonacci(6)).toEqual(8);
  });
  xit('works', function() {
    expect(fibonacci(10)).toEqual(55);
  });
  
});