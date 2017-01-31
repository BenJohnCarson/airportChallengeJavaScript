'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane = jasmine.createSpy("plane");
    airport = new Airport(weather);
  });

  it("has no planes by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
      beforeEach(function() {
          weather.isStormy.and.returnValue(false);
      });
      
      it("can clear planes for landing", function(){
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
      });

      it("can clear planes for takeoff", function() {
       airport.clearForLanding(plane);
       airport.clearForTakeOff(plane);
       expect(airport.planes()).toEqual([]);
      });
  });
  
  describe("Under stormy conditions", function(){
    beforeEach(function() {
        weather.isStormy.and.returnValue(true);
    });
    
    it("does not clear planes for takeoff", function() {
        expect(function() { airport.clearForTakeOff(plane); }).toThrowError("Can not takeoff during a storm");
    });
    
    it("does not clear planes for landing", function() {
        expect(function() { airport.clearForLanding(plane); }).toThrowError("Can not land during a storm");
    });
  });
});
