//Test Euro a Dolar
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar, oneEuroIs, } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.5 * oneEuroIs.USD); 
    })
//Test Dollar a Yen
test("One dollar should be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(2);
    const expected = 2 * 146.26;
    expect(fromDollarToYen(2)).toBe(292.52); 
    })
//Test Yen a Libra    
test("One yen should be 0.005 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(500);
    const expected = 500 * 0.005;
    expect(fromYenToPound(500)).toBe(2.77); 
    })