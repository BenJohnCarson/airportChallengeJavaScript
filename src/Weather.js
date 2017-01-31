'use strict';

function Weather(){
    this._CHANCE_OF_STORMY = 0.2;
}

Weather.prototype.isStormy = function(){
    return (Math.random() > this._CHANCE_OF_STORMY); 
};