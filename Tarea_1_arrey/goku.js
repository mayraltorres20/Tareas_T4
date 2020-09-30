class goku{
  constructor(){
    this.x = width/8;
    this.y = height/8;
    this.img = [];
    this.cae = 0;
    for(var i = 0; i < 12; i++){
      this.img[i] = loadImage("go_"+ i + ".png");
    }
  }

  mostrar(){
    imageMode(CENTER);
    push();//afectar solo a la imagen dentro
    translate(this.x, this.y);
    scale(0.5);
    if(keyCode == 37){
      rotateY(PI);
    }
    image(this.img[this.cae], 0,0);
    pop();//sierre de propiedad
     
    }
   
  
  moverDer(){
    this.cae++;
    this.x = this.x + 5;
    if(this.cae > 11){
      this.cae = 0;
    }
  }
  
  moverIzq(){
    this.cae++;
    this.x = this.x + -5;
    if(this.cae > 11){
      this.cae = 0;
    }
  }
  
}
  
  


