// What records do we have for CA 123 456?

module.exports = function (Taxis,carReg) {
  var specCarReg = [];

  Taxis.forEach(function(taxi) {
    if (taxi.RegistrationNumber === carReg) {
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
