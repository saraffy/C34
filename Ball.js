class Ball{
    constructor(x,y,radius){
        var options = {
            friction:2.0,
            density: 2.0,
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("maroon");
        strokeWeight(4);
        stroke("white");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}