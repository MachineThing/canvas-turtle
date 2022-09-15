export default function Turtle(turtleParent) {
    return class {
        #iconx;
        #icony;
        #heading;
        #penstate;
    
        constructor() {
            this.#iconx = 50;
            this.#icony = 50;
            this.#heading = 0;
            this.#penstate = true;
            this.parent = turtleParent;
        }
    
        get position() {
            // Return the turtle's position
            return {
                "x": this.#iconx,
                "y": this.#icony
            }
        }
    
        distance(x, y) {
            // Return the distance from the turtle to a specified point
            // √(|turtleX-x|^2 + |turtleY-y|^2)
            return Math.sqrt(Math.abs(this.#iconx-x)**2 + Math.abs(this.#icony-y)**2);
        }
    };
}