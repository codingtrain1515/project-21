class Dustbin
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true,
      "restitution":0,
      "friction":1,
      "density":0.1   //friction is 1

    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    rectMode(CENTER);
    stroke(0);
    fill(255);
    rect(pos.x, pos.y, this.w,this.h);
  }
  
}


