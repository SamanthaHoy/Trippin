// How many trips did CA 234 567 make

module.exports = function (Taxi,carRegis) {
  var value = 0;

  Taxi.forEach(function(taxi) {
    if (taxi.RegistrationNumber === carRegis) {
            value += taxi.Trips ;
        }
  })
  console.log("Trips : " + value);
  return value ;
}
