class Particle {
    constructor(x, y, size, vec, termVel, colorTemp){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vector = vec;
        this.terminalVelocity = termVel;
        this.color = colorTemp;
    }

    apply (v) {
        this.vector = this.vector.add(v).limit(this.terminalVelocity);
        colorMode(HSB, 800);
        let hueTemp = (hue(this.color) + v.mag()) % 800;
        this.color = color(hueTemp, saturation(this.color), brightness(this.color));
    }

    update() {
        this.x += this.vector.x;
        this.y += this.vector.y;
    }

    validate (xMin, xMax, yMin, yMax) {
        if (this.x > xMax) {
            this.x = xMin + this.x - xMax;
        }
        // if (this.y > yMax) {
        //     this.y = yMin + this.y - yMax;
        // }
    }

    display () {
        noStroke();
        colorMode(HSB);
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }
}
