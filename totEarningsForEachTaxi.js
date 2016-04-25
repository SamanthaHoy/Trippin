// What are the total earnings for each taxi?

module.exports = function(Taxis) {
  var vehicleDetails = {};

  Taxis.forEach(function(taxis) {
    var carReg = taxis.RegistrationNumber;
    var totalEarnings = Number(taxis.Trips * taxis.Fare);

    if (vehicleDetails[carReg] === undefined) { // if value doesnt exist in the new array
      vehicleDetails[carReg] = 0; // initialise vehicleDetails.carReg to 0 - will print the carReg : 0
    }

    vehicleDetails[carReg] = vehicleDetails[carReg] + totalEarnings; // add totalEarnings to previous total
  })
  console.log(vehicleDetails);
  return vehicleDetails;
}
