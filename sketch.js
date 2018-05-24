var satellite;
var resolution;
var x = 1000;
var y = 400;
var stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();

    resolution = windowWidth / 50;

    for (var i = 0; i < 100; i++) {
        let a = random(windowWidth);
        let b = random(windowHeight);
        stars[i] = { a, b };
    }

    x = windowWidth / 2;
    y = windowHeight / 2;

    satellite = new Satellite(windowWidth / 2, windowHeight / 2, resolution);

}

function draw() {
    background(0);

    for (let star of stars) {
        fill(255);
        ellipse(star.a, star.b, 1, 1)
    }

    stroke(50);
    fill("lightblue")
    ellipse(x, y, 100, 100);

    satellite.input();
    satellite.update();
    satellite.draw();

    x++;
    if (x > windowWidth) {
        x = 0;
    }
}

function keyReleased() {

}


