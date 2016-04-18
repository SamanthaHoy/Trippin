var noOfTrips = require ('../noOfTrips');
var lowestNoOfTrips = require ('../lowestNoOfTrips');
var recordsPerReg = require ('../recordsPerReg');
var howManyTrips = require ('../howManyTrips');
var allRoutes = require ('../allRoutes');
var totalEarningsForATaxi = require ('../totEarningsForATaxi');
var totalEarningsForEachTaxi = require ('../totEarningsForEachTaxi');

var assert = require ('assert');

var capeTownTaxis = [
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  },
  {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
  }
];

describe("Cape Town taxi's", function () {
// How many trips did all the taxis make?
      it("should return the no of trips all the taxis made", function(){
          var result = noOfTrips(capeTownTaxis);
          assert.equal(result,54)
      });
// What’s the lowest number of trips that any taxi in Cape Town made?
      it("should return the lowest no of Trips of all the taxi trips", function(){
          var result = lowestNoOfTrips(capeTownTaxis);
          assert.equal(result,9);
      });
// What records do we have for CA 123 456?
      it("should return the records which have register# CA 123 456", function() {
          var result = recordsPerReg(capeTownTaxis,"CA 123 456");
          result2 = [
            {
              "RegistrationNumber": "CA 123 456",
              "Route": "Cape Town - Bellville",
              "Fare": 13,
              "Trips": 9
            },
            {
              "RegistrationNumber": "CA 123 456",
              "Route": "Cape Town - Gugulethu",
              "Fare": 12,
              "Trips": 11
            }] ;
          assert.deepEqual(result,result2);
      });
// How many trips did CA 234 567 make?
      it("should return the no of Trips for CA 234 567",function(){
        var carReg = "CA 234 567";
        var result = howManyTrips(capeTownTaxis,carReg);
        assert.equal(result,11);
      });

// What are the names of all the routes that CA 345 678 took?
      it("should return all the names of the routes which CA 345 678 took", function() {
        var carReg = "CA 345 678";
        var result = allRoutes(capeTownTaxis,carReg);
        var result2 = [{"Route": "Cape Town - Langa"}, {"Route": "Cape Town - Cape Town"}];
        assert.deepEqual(result,result2);
      });

// What are the total earnings for CA 234 567?
      it("should return the total earnings for CA 234 567", function() {
        var carReg = "CA 234 567";
        var result = totalEarningsForATaxi(capeTownTaxis,carReg);
        assert.equal(result,132);
      })

// What are the total earnings for each taxi?
      it("should return the total earnings for each taxi" , function() {
        var result = totalEarningsForEachTaxi(capeTownTaxis);
        assert.deepEqual(result,{"CA 123 456":249,
        "CA 234 567":132,
        "CA 345 678":234})
      })
  });
