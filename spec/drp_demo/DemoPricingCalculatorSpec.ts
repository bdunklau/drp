describe("DemoPricing calculator", function() {
  var DemoPricingCalculator = require('../../src/app/demo/demo-pricing/demo-pricing.calculator.ts');
  var calculator;


  beforeEach(function() {
    calculator = new DemoPricingCalculator();
  });

  it("should be exist", function() {
    calculator.exists();
    expect(calculator.exists()).toEqual(true);
  });

  it("should determine the correct toll price", function() {
    let time = 1000; // 10am
    let locationId = 'abc';

    let model/*: {locationId: string, time1: number, time2: number, price: number}[]*/ = [
      {locationId: 'abc', time1: 900, time2: 1100, price: 1},
      {locationId: 'abc', time1: 1101, time2: 1300, price: 2},
      {locationId: 'def', time1: 900, time2: 1100, price: 3},
    ]

    let price = calculator.determineTollPrice(model, time, locationId);
    expect(price).toEqual(1);
  })

})
