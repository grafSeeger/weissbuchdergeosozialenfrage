var amount;
var a_b;
var testBox;
var size = 60;
var speed = 1;

function preload()
{
  // initialize sound
  a_b = loadSound('ab_ar.ogg');
  gr2 = loadSound('gr2_ar.ogg');
  mz  = loadSound('mz_ar.ogg');
  as  = loadSound('as_ar.ogg');
  es  = loadSound('es_ar.ogg');
  gf  = loadSound('gf_ar.ogg');
  gr  = loadSound('gr_ar.ogg');
  hw  = loadSound('hw_ar.ogg');
  jz  = loadSound('jz_ar.ogg');
  kh  = loadSound('kh_ar.ogg');
  nul = loadSound('lun_ar.ogg');
  sk  = loadSound('sk_ar.ogg');
  ug  = loadSound('ug_ar.ogg');
}


function setup() {
createCanvas(600, 600);
  Michael_Z = new Box(550,50,"Michael Zürn", size, mz, speed);
  Karin_H = new Box(400, 50, "Karin Hiltgartner", size, kh, speed);
  Guido_F = new Box(480, 120, "Guido Funke", size, gf, speed);
  InaSarah = new Box(370,170, "Ina & Sarah", size, null, speed);
  Gernot_R = new Box(440,250, "Gernot Ritter", size, gr, speed);
  Henning_W = new Box(445,310, "Henning Wilts", size, hw, speed);
  Anja_B = new Box(420,420, "Anja Bierwirth", size, a_b, speed);
  Johanna_Z = new Box(290,370, "Johanna Ziebritzki", size, jz, speed);
  Ulrike_G = new Box(240,270,"Ulrike Guérot", size, ug, speed);
  FFF = new Box(120,170, "Fridays 4 Future", size, nul, speed);
  Andreas_S = new Box(150,440, "Andreas Spiegl", size, as, speed);
  Sina_K = new Box(90,510,"Sina Kaufmann", size, sk, speed);
  Eberhard_S = new Box(90,310, "Eberhard Schwarz", size, es, speed);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  line(width/2,0,width/2,height);
  line(0, height / 2, width, height/2);
  strokeWeight(0.5);
  stroke(255,255,255);
  drawGrid(50,50);
  noFill();
  noStroke();
  //noStroke();
  Michael_Z.display();
  Michael_Z.move();
  Michael_Z.playSound();
  nameDisplay(Michael_Z);
  Karin_H.display();
  Karin_H.move();
  Karin_H.playSound();
  nameDisplay(Karin_H);
  Guido_F.display();
  Guido_F.move();
  Guido_F.playSound();
  nameDisplay(Guido_F);
  InaSarah.display();
  InaSarah.move();
  nameDisplay(InaSarah);
  Gernot_R.display();
  Gernot_R.move();
  Gernot_R.playSound();
  nameDisplay(Gernot_R);
  Henning_W.display();
  Henning_W.move();
  Henning_W.playSound();
  nameDisplay(Henning_W);
  Anja_B.display();
  Anja_B.move();
  Anja_B.playSound();
  nameDisplay(Anja_B);
  Johanna_Z.display();
  Johanna_Z.move();
  Johanna_Z.playSound();
  nameDisplay(Johanna_Z);
  Ulrike_G.display();
  Ulrike_G.move();
  Ulrike_G.playSound();
  nameDisplay(Ulrike_G);
  FFF.display();
  FFF.move();
  FFF.playSound();
  nameDisplay(FFF);
  Eberhard_S.display();
  Eberhard_S.move();
  Eberhard_S.playSound();
  nameDisplay(Eberhard_S);
  Andreas_S.display();
  Andreas_S.move();
  Andreas_S.playSound();
  nameDisplay(Andreas_S);
  Sina_K.display();
  Sina_K.move();
  Sina_K.playSound();
  nameDisplay(Sina_K);
  
  
}
 
function drawGrid(r,c) {
k = width / r;
l = height / c;
    for(i = 0; i < r; i++) { // Collums
    line(k * i, 0, k * i, height);
    }
  for(i = 0; i < r; i++) { // Collums
    line(0, l * i, width, l * i);
    }
}

function nameDisplay(object){
  if (object.mouseHover(mouseX,mouseY)) {
    object.displayName();
  }
}

function drawNet()
{
beginShape()
vertex(Michael_Z.x,Michael_Z.y);
  vertex(Karin_H.x,Karin_H.y);
  vertex(Guido_F.x,Guido_F.y);
  vertex(InaSarah.x,InaSarah.y);
  vertex(Gernot_R.x,Gernot_R.y);
  vertex(Henning_W.x,Henning_W.y);
  vertex(Anja_B.x,Anja_B.y);
  vertex(Johanna_Z.x,Johanna_Z.y);
  vertex(Ulrike_G.x,Ulrike_G.y);
  vertex(FFF.x,FFF.y);
  vertex(Eberhard_S.x,Eberhard_S.y);
  vertex(Andreas_S.x,Andreas_S.y);
  vertex(Sina_K.x,Sina_K.y);
endShape();

}

class Box {
  constructor(x, y, name, size, sound, speed) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.size = size;
    this.sound = sound;
    this.speed = speed;
  }
  display() {
    fill(color(0));
    rect(this.x - (this.size / 2), this.y - (this.size / 2),this.size,this.size)
  }
  mouseHover(m_x,m_y) {
    if (m_x < this.x + this.size/2 && m_x > this.x - this.size/2){
      if(m_y < this.y + this.size/2 && m_y > this.y - this.size/2){
      return true;
      }
      else {
      return false;
      }
  }
    else {
      return false;
    }
  }
  displayName(){
    fill(255,255,0);
    strokeWeight(0);
    textStyle(BOLD);
    textSize(15);
    textAlign(CENTER,CENTER);
    text(this.name, this.x, this.y);
  }
  
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  playSound(){
  if(this.mouseHover(mouseX,mouseY) && !this.sound.isPlaying()){
  this.sound.play();
  }else if (!this.mouseHover(mouseX,mouseY)){
  this.sound.pause();
  }
  }
  
}