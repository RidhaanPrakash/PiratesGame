class Ground {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      isStatic: true
    };
    this.width = widthInput;
    this.height = heightInput;
    this.body = Bodies.rectangle(xInput, yInput, this.widthInput, this.heightInput, options);
    World.add(userWorld, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
   
  }
}
