// Blink an LED
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var button = new five.Button({
      pin:2,
      isPullup:true
  });
    
  var led = new five.Led(8);
  var led2 = new five.Led(7);
    
  button.on("press", function() {
    console.log( "Button released" );
        led.on();
        led2.on();
  });
  
  button.on("release", function(){
        led.off();
        led2.off();
  })
 
});