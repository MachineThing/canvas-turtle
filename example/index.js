// This makes the turtle do some cool stuff
"use strict";
const canvas = document.getElementById("canvas");
var turtle = new canvas.Turtle();
console.log(turtle.distance(25, 25))
for (let index = 0; index < 4; index++) {
    turtle.rotate(90);
    turtle.forward(50);
}