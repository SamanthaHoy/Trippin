
module.exports = function(capeTownTaxis) {
// exports.howManyTrips = function
var totalTrips = 0;
capeTownTaxis.forEach(function (taxi) {
  totalTrips += taxi.Trips ;
}) ;

console.log("Total no of trips: " + totalTrips);
return totalTrips ;
}
