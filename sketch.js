let myDemopeice;
let myTetrisgridL;
let myTetrisgridR;
let myTetrisgridF;
let keyIsPressed = false; 
let timer = 1000
let cam1, cam2, cam3, cam4;
let currentcamera;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(80);
  rectMode(CENTER);
  angleMode(DEGREES);
  myDemopeice = new Demopeice(10, 10, 10, 0, -110, 0, {r: 0, g: 0, b: 255}, 255);
  myTetrisgridL = new Tetrisgrid(110, 300, 0, 54, -150, 1, 0, 90, 255, {r: 0, g: 0, b: 0});
  myTetrisgridR = new Tetrisgrid(111, 300, 0,  0, -150, -54, 0, 0, 255, {r: 0, g: 0, b: 0});
  myTetrisgridF = new Tetrisgrid(111, 110, 0,  0, 0, 1, 90, 0, 255, {r: 0, g: 0, b: 0});
  setInterval( () => Gravity(), timer)
  cam1 = new devCam(-250, -300, 250, 0, -100, 0);
  cam2 = new devCam(-300, 0, 0, 0, 0, 0)
  cam3 = new devCam(0, 0, 300, 0, 0, 0)
  cam4 = new devCam(1, -500, 0, 0, 0, 0)
  currentcamera = cam1;
}

function cam() {
  return currentcamera;
}


let Gravity = () => {
  myDemopeice.y += 10

  if (myDemopeice.y >= myTetrisgridF.y - 5) {
    myDemopeice.y = myTetrisgridF.y - 5
  }
}

function draw() {
  inputs();
  processes();
  outputs();
}

function inputs() {
  const distance = 10;
  if (keyIsDown(87) && !keyIsPressed) { 
      myDemopeice.z -= distance;
      keyIsPressed = true;
    } else if (keyIsDown(65) && !keyIsPressed) { 
      myDemopeice.x -= distance;
      keyIsPressed = true;
   } else if (keyIsDown(83) && !keyIsPressed) {
      myDemopeice.z += distance;
      keyIsPressed = true;
   } else if (keyIsDown(68) && !keyIsPressed) {
      myDemopeice.x += distance; 
      keyIsPressed = true;
  } else if (!keyIsDown(87) && !keyIsDown(65) && !keyIsDown(83) && !keyIsDown(68)) {
    keyIsPressed = false;
  }
}

function processes() {
  myDemopeice.move();
}

function outputs() {
  background(0,0,0);
  currentcamera.show();
  stroke(0);
  myDemopeice.show();
  stroke(255);
  myTetrisgridL.show();
  myTetrisgridR.show();
  myTetrisgridF.show(); 
}


function keyTyped() {
  if (key == '1') {
    currentcamera = cam1;
  }
  else if (key == '2') {
    currentcamera = cam2;
  }
  else if (key == '3') {
    currentcamera = cam3;
  }
  else if (key == '4') {
    currentcamera = cam4;
  }
}
