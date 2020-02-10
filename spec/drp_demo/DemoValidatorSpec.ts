describe("DemoPricing validator", function() {
  var DemoPricing = require('../../src/app/demo/demo-pricing/demo-pricing.calculator.ts');
  var demoPricing;


  beforeEach(function() {
    demoPricing = new DemoPricing();
  });


  it("should detect '2' as valid price", function() {
    let valid = demoPricing.isValidPrice('2');
    expect(valid).toEqual(true);
  });


  it("should detect 2.0 valid price", function() {
    let valid = demoPricing.isValidPrice(2.0);
    expect(valid).toEqual(true);
  });


  it("should detect .02 valid price", function() {
    let valid = demoPricing.isValidPrice(.02);
    expect(valid).toEqual(true);
  });


  it("should detect '2x' as invalid price", function() {
    let valid = demoPricing.isValidPrice('2x');
    expect(valid).toEqual(false);
  });

})
