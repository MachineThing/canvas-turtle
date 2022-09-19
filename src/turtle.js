export default function Turtle(turtleParent) {
    return class {
        #svg;
        #poly;
        #iconx;
        #icony;
        #heading;
        #penstate;
    
        constructor() {
            this.#iconx = 50;
            this.#icony = 50;
            this.#heading = this.#degToRad(90);
            this.#penstate = true;

            this.parent = turtleParent;
            this.parent.turtles.push(this)

            const xmlns = "http://www.w3.org/2000/svg";
            
            const points = `${this.parent.svgStke},${this.parent.svgStke} ${this.parent.svgSize-this.parent.svgStke},${this.parent.svgSize/2}, ${this.parent.svgStke},${this.parent.svgSize-this.parent.svgStke} ${this.parent.svgSize/4},${this.parent.svgSize/2}`;
            
            this.#svg = document.createElementNS(xmlns, 'svg');
            this.#svg.setAttribute("width", this.parent.svgSize);
            this.#svg.setAttribute("height", this.parent.svgSize);

            this.#poly = document.createElementNS(xmlns, 'polygon');
            this.#poly.setAttribute("points", points);
            this.update();

            this.#svg.appendChild(this.#poly);
            this.parent.appendChild(this.#svg);
        }

        #degToRad(deg) {
            return deg / 180 * Math.PI;
        }
        
        // convert radians to degrees
        #radToDeg(rad) {
            return rad * 180 / Math.PI;
        }

        update() {
            // Update the turtle icon
            this.#svg.setAttribute("style", `top:${this.#icony-Math.round(this.parent.svgSize/3)}px;left:${this.#iconx-Math.round(this.parent.svgSize/3)}px;transform: rotate(${/* This hurts my head */360-(this.#radToDeg(this.#heading)-90)}deg);`);
            this.#poly.setAttribute("style", `fill:white;stroke:black;stroke-width:${this.parent.svgStke};`);
        }

        forward(distance) {
            // Make the turtle move forward by the specified distance
            this.parent.ctx.moveTo(this.#iconx, this.#icony)
            this.#iconx = this.#iconx + Math.sin(this.#heading) * distance;
            this.#icony = this.#icony + Math.cos(this.#heading) * distance;
            this.parent.ctx.lineTo(this.#iconx, this.#icony)
            this.parent.ctx.stroke()
            this.update();
        }

        backward(distance) {
            // Make the turtle move backward by the specified distance
            this.forward(distance*-1);
        }

        rotate(angle) {
            // Make the turtle rotate clockwise by the specified angle
            this.#heading = this.#heading + this.#degToRad(angle);
            this.update();
        }

        left(angle) {
            // Make the turtle rotate left (counter-clockwise) by the specified angle
            this.rotate(angle*1);
        }

        right(angle) {
            // Make the turtle rotate right (clockwise) by the specified angle
            this.rotate(angle);
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