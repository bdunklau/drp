
// import * as _ from 'lodash';
let _ = require('lodash');
// var _ = require('lodash')

function DemoPricing() {
  // var _ = require('lodash')
}
DemoPricing.prototype.exists = function() {
  return true;
};

DemoPricing.prototype.determineTollPrice = function(time, locationId) {
  var model/*: {locationId: string, time1: number, time2: number, price: number}[]*/ = [
    {locationId: 'abc', time1: 900, time2: 1100, price: 1},
    {locationId: 'abc', time1: 1101, time2: 1300, price: 2},
    {locationId: 'def', time1: 900, time2: 1100, price: 3},
  ]

  var loc = _.filter(model, function(item) {
    return item.locationId == locationId;
  })
  var found = _.find(loc, function(item) { return time > item.time1 && time < item.time2 })
  return found.price;
  // return 1;
}

//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
//

module.exports = DemoPricing;
