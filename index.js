var events = require('events');
var util = require('util');

/*
{
var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){
  console.log(text);
} );

myEmit.emit('some_event', 'Обработчик событий сработал!');
}
*/

var Cars = function(model) {
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volve = new Cars('Volve');

var cars = [bmw, audi, volve];
cars.forEach(function(car) {
  car.on('speed', function(text) {
    console.log(car.model + " speed is - " + text);
  });
});

bmw.emit('speed', '254.5 km');
volve.emit('speed', '180 km');
