var colorList = ['#011936',
                 '#465362',
                 '#f4fffd',
                 '#f9dc5c',
                 '#ee385e'];
var Minute;
var Hour;
var circleH;
var circleM;
var circleS;

function setup() {
   translate(width/2,height/2);
   createCanvas (windowWidth,windowHeight);
   background(colorList[0]);
   angleMode(DEGREES);
   textFont('Century Gothic');
}

function draw() {
   translate(width/2,height/2);
   background(1,25,54,25);
   if(width>height) {
      D=height;
   } else {
     D=width;
   }
   
   var seconds = map(second(),0,60,-135,360-135);
   var minutes = map(minute(),0,60,-135,360-135);
   var hours = map(hour(),0,12,-135,360-135);
   
   circleH = new clockHand (0,0,325*D/800);
   circleM = new clockHand (0,0,475*D/800);
   circleS = new clockHand (0,0,600*D/800);
   
   var d = day();
   var m = month();
   var y = year();

   // Cerchio dei secondi
      noFill();
      strokeWeight(10*D/800);
      stroke(color(colorList[2]));
      fill(color(244,255,253,10));
      circleS.display();
      
      push();
      noStroke();
      fill(color(colorList[2]));
      rotate(seconds);
      polygon(217*D/800, 217*D/800, 10*D/800, 3); 
      pop();
      
   // Cerchio dei minuti
      noFill();
      strokeWeight(12*D/800);
      stroke(color(colorList[3]));
      fill(color(244,255,253,30));
      circleM.display();
      
      push();
      noStroke();
      fill(color(colorList[3]));
      rotate(minutes);
      polygon(174*D/800, 174*D/800, 15*D/800, 3); 
      pop();
      
   // Cerchio delle ore
      noFill();
      strokeWeight(20*D/800);
      stroke(color(colorList[4]));
      fill(color(244,255,253,50));
      circleH.display();
      
      push();
      noStroke();
      fill(color(colorList[4]));
      rotate(hours);
      polygon(122*D/800, 122*D/800, 20*D/800, 3); 
      pop();   
   
   // Giorno, mese e anno
      push();
      noStroke();
      fill(color(colorList[1]));
      textSize(30*D/800);
      textStyle(BOLD);
      textAlign(LEFT);
      text(d,-100*D/800,12*D/800);
      textAlign(CENTER);
      text(m,-7.5*D/800,12*D/800);
      textAlign(RIGHT);
      text(y,110*D/800,12*D/800);
      
}

function clockHand(tempX, tempY, tempSize) {
   this.x = tempX;
   this.y = tempY;
   this.size = tempSize;

   this.display = function() {
   ellipse(this.x, this.y, this.size);
   }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, radius, npoints) {
  var angle = 360 / npoints;
  beginShape();
  for (var a = 0-75; a <= 360-75; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
      }
  endShape(CLOSE);
}