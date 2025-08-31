

let objects = [];
let diameter = 50;

function setup(){
  createCanvas(600, 400);
  background(0);
  sprite = circle(90, 90, diameter);
  sprite.diameter += 1000;
  sprite.collider = "dynamic";
  world.gravity.y = 15;
}

function draw(){
    background(0);
    objectposition();
    ellipse(90, 400, 50, 50); // Draw the player as a circle
}

function mousePressed() {
    console.log("Mouse clicked at: ", mouseX, mouseY);
    let newsprite = circle(mouseX, mouseY, diameter);
    sprite.gravity = 15;
    objects.push(newsprite);
}

function objectposition() {
    for (let index = 0; index < objects.length; index++) {
        console.log(objects[index].vely);
        objects[index].vely = 10
    } 
}