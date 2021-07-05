class Paper{
    constructor(x,y,radius){
let options = {
    isStatic:false,
    "restitution":0.3,
    "friction":0.5 , 
     "density": 1.2  
}
this.body = Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.radius = radius;

    }
    show(){
        
        let pos = this.body.position
        ellipseMode(RADIUS);
        stroke('black');
        fill("yellow")
        pop();
        ellipse(pos.x,pos.y,this.radius)
    }
}