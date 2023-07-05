class Demopeice {
  constructor(width, length, depth, x, y, z, colour, stroke) {
    this.width = width;
    this.length = length;
    this.depth = depth;
    this.x = x;
    this.y = y;
    this.z = z;
    this.colour = colour;
    this.stroke = stroke;
    this.dpX = 0;
    this.dpZ = 0;
  }

  show() {
    let {r, g, b} = this.colour;
    let {stroke} = this.stroke;
    push();
    translate(this.x, this.y, this.z);
    fill(r, g, b);
    box(this.width, this.length, this.depth);
    pop();
  }

  move() {
   const distance = 10;
    this.x += this.dpX
    this.z += this.dpZ
  }
  
}
