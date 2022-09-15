class CanvasTurtle extends HTMLCanvasElement {
    #iconx;
    #icony;
    #penstate;
    constructor() {
        super();
        // Get values
        this.speed = this.hasAttribute("speed") ? this.getAttribute("speed") : 6;
        this.icon = this.hasAttribute("icon") ? this.getAttribute("icon") : "pointer";
        this.#iconx = 0;
        this.#icony = 0;
        this.#penstate = true;

        this.ctx = this.getContext('2d');
    }

    sayHi() {
        console.log("Hi!")
    }

    get position() {
        return {
            "x": this.xpos,
            "y": this.ypos
        }
    }
    
    get pos() {
        return this.position;
    }

    get xpos() {
        return this.#iconx;
    }

    get ypos() {
        return this.#icony;
    }
}

customElements.define("canvas-turtle", CanvasTurtle, {extends: 'canvas'});