// Blink an LED
var five = require("johnny-five");
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

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
        
  });
  
  button.on("release", function(){
         ws.send("buttonP");
  })
 
    
    ws.on('message', function incoming(data) {
        console.log(data);
   
    
        if(data == "right"){
            led.on();
            led2.off();
            console.log("right")
        }
        else if(data == "wrong"){
            led.off();
            led2.on();
            console.log("wrong")
        }
        else{
            led.off();
            led2.off();
        }

    
    });
});



 
