var gok;
function setup() {
  createCanvas(500, 500, WEBGL);
  gok = new goku();
  frameRate(4);
}

function draw() {
  background(220);
  gok.mostrar();
  if(keyIsPressed && keyCode == 39){
      gok.moverDer();
  }
  if(keyIsPressed && keyCode == 37){
    gok.moverIzq();
     }
 
}