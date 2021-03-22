class Dustbin {
    constructor(x, y, width, height) {
        var options = {
          'isStatic': true,
            'restitution':0,
            'friction':16,
            'density':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
    }

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    fill(275);
    image(this.image,0,3, this.width, 150);
      pop();
    //pop();
  }
};