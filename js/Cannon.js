class Cannon {
    constructor(xInput, yInput, widthInput, heightInput, angleInput) {
      this.x = xInput;
      this.y = yInput;
      this.width = widthInput;
      this.height = heightInput;
      this.angle = angleInput;
    }
    display() {
      fill("#676e6a");
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(-10, -20, this.width, this.height);
      pop();
      arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
      noFill();
    }
  }
  