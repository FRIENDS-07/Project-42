class Drop{

    constructor(x,y){

        var options = {
            isStatic:false,
            friction:0.1
        }

        this.body = Bodies.circle(x,y,5,options);
        this.color = "blue";
        World.add(world,this.body);

    }

    display(){
        push();
        rotate(this.body.angle);
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,5,5);
        pop();
    }

}