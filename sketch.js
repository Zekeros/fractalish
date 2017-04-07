var bCol = 100
var arrs = []
var x=10
var y=10

function setup() {
  createCanvas(1300,600)
	x = canvas.width/2;
	y = canvas.height/2;
  makeSave()
  var timer = window.setInterval(timerFunc,1)
  var colTime = window.setInterval(randFill,1000)
  randFill()
  background(100)
  strokeWeight(10)
}

function draw() {
// randFill()
}

function saveC() {
	saveCanvas('myCanvas',"png")
}

function timerFunc() {
  point(x, y)
  point(canvas.width-x, y)
  point(x, canvas.height-y)
  point(canvas.width-x, canvas.height-y)
  xadd=Math.floor(random(-10,11));
  yadd=Math.floor(random(-10,11));
  if (x<10 || x>(canvas.width-10)) {
    xadd*=-1
  }
  x+=xadd
  if(y-yadd<10) {
    yadd*=-1
  }
  y-=yadd
}

function randFill() {
	randR = random(0,255);
	randG = random(0,255);
  randRG = randR*randG
	randB = random(0,255);
  // background(randB-100,randR-100,randG-100);
	stroke(randR,randG,randB,50);
}


function makeSave() {
  saveB = createButton("SAVE")
  saveB.mousePressed(saveC)
}
