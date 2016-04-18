var noOfTrips = require ('../noOfTrips');
var lowestNoOfTrips = require ('../lowestNoOfTrips');
var recordsPerReg = require ('../recordsPerReg');
var howManyTrips = require ('../howManyTrips');
var allRoutes = require ('../allRoutes');
var totalEarningsForATaxi = require ('../totEarningsForATaxi');
var totalEarningsForEachTaxi = require ('../totEarningsForEachTaxi');

var assert = require ('assert');

var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];

describe("Durban Taxi trips", function (){
// How many trips did all the taxis make?
  it ("should return how many trips all the taxi's made", function(){
    var result = noOfTrips(durbanTaxis);
    assert.equal(result,117);
  });
// What’s the lowest number of trips that any taxi in Durban made?
  it("should return what the lowest number of trips that any taxi in Durban made", function(){
    var result = lowestNoOfTrips(durbanTaxis);
    assert.equal(result,9)
  });
// What records do we have for ND 123 456?
  it("should return the records for ND 123 456", function(){
    var result = recordsPerReg(durbanTaxis,"ND 123 456");
    result2 = [
      { "RegistrationNumber": "ND 123 456",
        "Route": "Durban - University of KZN",
        "Fare": 7,
        "Trips": 14
      },
      {
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - Umbilo",
        "Fare": 8,
        "Trips": 15
      }];
    assert.deepEqual(result,result2);
  });
// How many trips did ND 234 567 make?
 it("should return how many trips ND 234 567 made" , function (){
   var result = howManyTrips(durbanTaxis,"ND 234 567");
   assert.equal(result,36);
 });
// What are the names of all the routes that ND 345 678 took?
it("should return all the names of all the routes that ND 345 678 took", function(){
  var result = allRoutes(durbanTaxis,"ND 345 678");
  result2 = [{"Route": "Durban - Umbilo"},{"Route": "Durban - University of KZN"},{"Route": "Durban - Umlazi Station"}];
  assert.deepEqual(result,result2);
});
// What are the total earnings for ND 234 567?
it("should return the total earnings for ND 234 567", function(){
  var result = totalEarningsForATaxi(durbanTaxis,"ND 234 567");
  assert.equal(result,387);
});
// What are the total earnings for each taxi?
it("should return the total earnings for each taxi", function(){
  var result = totalEarningsForEachTaxi(durbanTaxis);
  result2 = {"ND 123 456":218, "ND 234 567":387 , "ND 345 678":518}
  assert.deepEqual();
})
});
