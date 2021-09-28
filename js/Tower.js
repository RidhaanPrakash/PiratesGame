class Tower {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      isStatic: true,
    };
    this.image = loadImage("assets/tower.png");
    this.width = widthInput;
    this.height = heightInput;
    this.body = Bodies.rectangle(
      xInput,
      yInput,
      this.width,
      this.height,
      options
    );

    World.add(userWorld, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
