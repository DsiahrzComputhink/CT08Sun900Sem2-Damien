

let objects = [];
let diameter = 50;

function setup(){
  createCanvas(600, 400);
  background(0);
  sprite.diameter += 1000;
  sprite.collider = "dynamic";
  world.gravity.y = 1;
  square = new rect(width / 2, height - (square.), width, height);
  square.collider = "static"
}

function draw(){
    for (let index = 0; index < objects.length; index++) {
        console.log(objects[index].y);
        // objects[index]
    }
}

function mousePressed() {
    console.log("Mouse clicked at: ", mouseX, mouseY);
    let newsprite = new Sprite(mouseX, mouseY, diameter);
    sprite.gravity = 15;
    objects.push(newsprite);
}
