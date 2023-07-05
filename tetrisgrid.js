class Tetrisgrid {
    constructor(length, width, depth, x, y, z, rotateX, rotateY, stroke, colour) {
      this.length = length
      this.width = width
      this.depth = depth
      this.x = x
      this.y = y
      this.z = z
      this.rotateX = rotateX
      this.rotateY = rotateY
      this.colour = colour
      this.stroke = stroke;
      this.depth = depth
    }
  
    show() {
      let {r, g, b} = this.colour;
      let {stroke} = this.stroke;
      push();
      fill(r, g, b);
      translate(this.x, this.y, this.z);
      rotateX(this.rotateX);
      rotateY(this.rotateY)
      box(this.length, this.width, this.depth);
      pop();
    }
  }