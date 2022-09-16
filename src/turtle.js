export default function Turtle(turtleParent) {
    return class {
        #svg;
        #poly
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
            this.parent.turtles.push(this)

            const xmlns = "http://www.w3.org/2000/svg";

            const svgSize = 25;
            const svgStke = svgSize/12.5;
            const points = `${svgStke},${svgStke} ${svgSize-svgStke},${svgSize/2}, ${svgStke},${svgSize-svgStke} ${svgSize/4},${svgSize/2}`;
            
            this.#svg = document.createElementNS(xmlns, 'svg');
            this.#svg.setAttribute("width", svgSize);
            this.#svg.setAttribute("height", svgSize);

            this.#poly = document.createElementNS(xmlns, 'polygon');
            this.#poly.setAttribute("points", points);
            this.#poly.setAttribute("style", `fill:white;stroke:black;stroke-width:${svgStke}`);

            this.#svg.appendChild(this.#poly);
            this.parent.appendChild(this.#svg);
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