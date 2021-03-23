class Umbrella {
    constructor(x, y) {
      var options = {
         'isStatic': true
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
      this.image = loadImage("images/WalkingFrame/walking1.png");
      World.add(world, this.body);

    }

   
   
    display(){
      var pos =this.body.position;
      strokeWeight(4) ;
      fill("darkBlue");
      imageMode(RADIANS);
      image(this.image, pos.x, pos.y+70,300,300);
     

      
   
   
  }
}