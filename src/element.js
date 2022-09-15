class CanvasTurtle extends HTMLCanvasElement {
    #iconx;
    #icony;
    #heading;
    #penstate;
    #ctx;
    constructor() {
        super();
        // Get values
        this.speed = this.hasAttribute("speed") ? this.getAttribute("speed") : 6;
        this.icon = this.hasAttribute("icon") ? this.getAttribute("icon") : "pointer";

        this.#iconx = 50;
        this.#icony = 50;
        this.#heading = 0;
        this.#penstate = true;

        this.#ctx = this.getContext('2d');
        
    }

    sayHi() {
        console.log("Hi!")
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
}

customElements.define("canvas-turtle", CanvasTurtle, {extends: 'canvas'});