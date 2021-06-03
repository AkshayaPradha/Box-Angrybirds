class Bird{
    constructor(x,y){
        //mention the properties
        // 'this' - refers to the class
        this.width = 50;
        this.height = 50;
        
        var options = {
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle
        angleMode(RADIANS) 
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
        
    }
  
}