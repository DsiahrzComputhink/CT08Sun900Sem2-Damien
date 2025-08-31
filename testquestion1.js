

let objects = [];
let diameter = 50;

function setup(){
  createCanvas(600, 400);
  background(0);
  sprite.collider = "dynamic";
  world.gravity.y = 1;
  square = rect(width / 2, height - (square.height / 2), width, 50);
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
