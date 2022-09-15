import Turtle from "./turtle";

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

        let turtleParent = this;

        this.Turtle = Turtle(turtleParent);
    }
}

customElements.define("canvas-turtle", CanvasTurtle);