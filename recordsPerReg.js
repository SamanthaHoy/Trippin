// What records do we have for CA 123 456?

module.exports = function (capeTownTaxis) {
  var specCarReg = [];

  capeTownTaxis.forEach(function(taxi) {
    if (taxi.RegistrationNumber === "CA 123 456") {
      specCarReg.push({
        "RegistrationNumber": taxi.RegistrationNumber ,
        "Route": taxi.Route ,
        "Fare": taxi.Fare ,
        "Trips": taxi.Trips
       })
     }
    })
    return specCarReg;
}
