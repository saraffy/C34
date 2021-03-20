class Box{
    constructor(x,y,width,height){
        var options = {
            friction:2.0,
            density: 2.0,
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("wood1.png");
        this.visibility = 255;
        World.add(world,this.body);
    }

    display(){
        console.log(this.body.speed);
        if(this.body.speed<5)
        {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("green");
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }

else{
    push();
    World.remove(world,this.body);
    this.visibility = this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
}
}
}