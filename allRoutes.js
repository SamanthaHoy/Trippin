// What are the names of all the routes that CA 345 678 took?

module.exports = function (capeTownTaxi,carReg) {
  var routes = [];

  capeTownTaxi.forEach(function(taxi) {
    if (taxi.RegistrationNumber === carReg) {
      routes.push({
        "Route" : taxi.Route
      })
    }
  })
  console.log (routes);
  return routes ;
}
