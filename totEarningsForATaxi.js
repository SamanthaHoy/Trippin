// What are the total earnings for CA 234 567?

module.exports = function (Taxis , carReg) {
  var totalEarnings = 0 ;

  Taxis.forEach(function(taxi) {
    if (taxi.RegistrationNumber === carReg) {
      totalEarnings += taxi.Fare * taxi.Trips ;
      }
  })
  console.log("totalEarnings :" + totalEarnings);
  return totalEarnings;
}
