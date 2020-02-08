
// import * as _ from 'lodash';
let _ = require('lodash');
// var _ = require('lodash')

function DemoPricing() {
  // var _ = require('lodash')
}
DemoPricing.prototype.exists = function() {
  return true;
};

DemoPricing.prototype.determineTollPrice = function(model, time, locationId) {

  var loc = _.filter(model, function(item) {
    return item.locationId == locationId;
  })
  var found = _.find(loc, function(item) { return time > item.time1 && time < item.time2 })
  return found.price;
  // return 1;
}

module.exports = DemoPricing;
