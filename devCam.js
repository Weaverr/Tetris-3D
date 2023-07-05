class devCam {
    constructor(x, y, z, lookx, looky, lookz) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.lookx = lookx;
      this.looky = looky;
      this.lookz = lookz;
    }
  
    show() {
      camera(this.x, this.y, this.z, this.lookx, this.looky, this.lookz);
    }
  }