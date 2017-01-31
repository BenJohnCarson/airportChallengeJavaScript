'use strict';

function Airport(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = [];
}

Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
    if(this._weather.isStormy()) {
        throw new Error("Can not land during a storm");
    }
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
    if(this._weather.isStormy()) {
        throw new Error("Can not takeoff during a storm");
    }
    this._hangar.pop();
};

// Airport.prototype.isStormy = function() { return false; };


