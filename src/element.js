class CanvasTurtle extends HTMLElement {
    #canvasEle;
    #ctx;

    constructor() {
        super()
        // Get values
        this.speed = this.hasAttribute("speed") ? this.getAttribute("speed") : 6;
        this.icon = this.hasAttribute("icon") ? this.getAttribute("icon") : true;
        this.width = this.hasAttribute("width") ? this.getAttribute("width") : 500;
        this.height = this.hasAttribute("height") ? this.getAttribute("height") : 500;

        this.#canvasEle = document.createElement('canvas');
        this.#canvasEle.width = this.width;
        this.#canvasEle.height = this.height;
        this.appendChild(this.#canvasEle);

        this.#ctx = this.#canvasEle.getContext('2d');
        
    }

    Turtle() {
        let parent = super.this;
        return new class {
            #iconx;
            #icony;
            #heading;
            #penstate;
        
            constructor() {
                this.#iconx = 50;
                this.#icony = 50;
                this.#heading = 0;
                this.#penstate = true;
                this.parent = parent;
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
}

customElements.define("canvas-turtle", CanvasTurtle);