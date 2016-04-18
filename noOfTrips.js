
module.exports = function(Taxis) {
// exports.howManyTrips = function
var totalTrips = 0;
Taxis.forEach(function (taxi) {
  totalTrips += taxi.Trips ;
}) ;

console.log("Total no of trips: " + totalTrips);
return totalTrips ;
}
