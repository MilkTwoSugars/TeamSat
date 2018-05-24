class Satellite {

    constructor(x, y, s) {
        this.position = createVector(x, y);
        this.size = s;
        this.halfSize = s / 2;

        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = 1;
        this.speed = 0.1;

        this.thrusters = [false, false, false, false];
        this.keys = [UP_ARROW, RIGHT_ARROW, DOWN_ARROW, LEFT_ARROW];
    };

    draw() {
        rectMode(CENTER);
        noStroke();
 
        if (this.thrusters[0]){
            fill("red");
            ellipse(this.position.x, this.position.y - this.halfSize, this.size / 4, this.halfSize);
            fill("yellow");
            ellipse(this.position.x, this.position.y - this.halfSize, this.size / 8, this.size / 4);
        }
        if (this.thrusters[1]){
            fill("red");
            ellipse(this.position.x + this.halfSize, this.position.y, this.halfSize, this.size / 4);
            fill("yellow");
            ellipse(this.position.x + this.halfSize, this.position.y, this.size / 4, this.size / 8);
        }
        if (this.thrusters[2]){
            fill("red");
            ellipse(this.position.x, this.position.y + this.halfSize, this.size / 4, this.halfSize);
            fill("yellow");
            ellipse(this.position.x, this.position.y + this.halfSize, this.size / 8, this.size / 4);
        }
        if (this.thrusters[3]){
            fill("red");
            ellipse(this.position.x - this.halfSize, this.position.y, this.halfSize, this.size / 4);
            fill("yellow");
            ellipse(this.position.x - this.halfSize, this.position.y, this.size / 4, this.size / 8);
        }
        fill("#48494C");
        rect(this.position.x, this.position.y, this.size, this.size, this.size / 5);
        fill("grey");
        rect(this.position.x, this.position.y, this.size / 1.5, this.size / 1.5);

    };

    move(d) {

        if (d == 2) {
            this.acceleration.add(createVector(0, - this.speed));
        }
        if (d == 3) {
            this.acceleration.add(createVector(this.speed, 0));
        }
        if (d == 0) {
            this.acceleration.add(createVector(0, this.speed));
        }
        if (d == 1) {
            this.acceleration.add(createVector(- this.speed, 0));
        }
    };

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        if (this.position.x > windowWidth) { this.position.x = 0 };
        if (this.position.y > windowHeight) { this.position.y = 0 };
        if (this.position.x < 0) { this.position.x = windowWidth };
        if (this.position.y < 0) { this.position.y = windowHeight };
    };

    input() {
        for (let i = 0; i < this.keys.length; i++) {
            if (keyIsDown(this.keys[i])) {
                this.thrusters[i] = true;
                this.move(i);
            }
        }

        for (let i = 0; i < this.keys.length; i++) {
            if (!keyIsDown(this.keys[i])) {
                this.thrusters[i] = false;
            }
        }
    }
}