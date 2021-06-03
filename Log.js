class Log{
    constructor(x,y,height,angle){
        //mention the properties
        // 'this' - refers to the class
        this.width = 20;
        this.height = height;
        
        
        var options = {
            restitution : 0.5,
            friction : 1
            
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle);
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