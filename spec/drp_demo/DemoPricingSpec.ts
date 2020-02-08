describe("DemoPricing", function() {
  var DemoPricing = require('../../src/app/demo/demo-pricing/demo-pricing.calculator.ts');
  var demoPricing;


  beforeEach(function() {
    demoPricing = new DemoPricing();
  });

  it("should be exist", function() {
    demoPricing.exists();
    expect(demoPricing.exists()).toEqual(true);
  });

  it("should determine the correct toll price", function() {
    let time = 1000; // 10am
    let locationId = 'abc';
    let price = demoPricing.determineTollPrice(time, locationId);
    expect(price).toEqual(1);
  })

})
