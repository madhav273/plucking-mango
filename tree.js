class tree{
    constructor(x,y){

        var options = {
            isStatic : true
        }

        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y, 50, 50);
        World.add(world, this.body);
    }

    display(){ 
        push();       
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, 500,500);   
        pop()    

    }
}