// What’s the lowest number of trips that any taxi in Cape Town made?

module.exports = function(capeTownTaxis) {
  var lowest = capeTownTaxis[0].Trips ;

  capeTownTaxis.forEach(function (taxi) {
    if (taxi.Trips < lowest) {
      lowest = taxi.Trips;
    }
  })
  console.log("The lowest number of trips :" + lowest) ;
  return lowest ;
}
