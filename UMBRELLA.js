class Umbrella{

    constructor(x,y){

        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,100,options);
        this.image = loadImage("images/walking_1.png");
        World.add(world,this.body);

    }

    display(){
        push();
        rotate(this.body.rotate);
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }

}