
let _ = require('lodash');

function DemoPricingCalculator() {
}
DemoPricingCalculator.prototype.exists = function() {
  return true;
};

DemoPricingCalculator.prototype.determineTollPrice = function(model, time, locationId) {

  var loc = _.filter(model, function(item) {
    return item.locationId == locationId;
  })
  var found = _.find(loc, function(item) { return time > item.time1 && time < item.time2 })
  return found.price;
  // return 1;
}

DemoPricingCalculator.prototype.isValidPrice = function(price) {
  var nan = isNaN(price)
  return !nan;
};

module.exports = DemoPricingCalculator;
