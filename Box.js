class Box{
    constructor(x,y,width,height){
        //mention the properties
        // 'this' - refers to the class
        this.width = width;
        this.height = height;
        
        var options = {
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        angleMode(RADIANS) 
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
        
    }
}