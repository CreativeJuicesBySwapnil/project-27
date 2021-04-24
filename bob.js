class Bob{
    constructor(x,y){
        var opt = {
            friction:0,
            density:0.8,
            restitution:1
        }
        this.body= Matter.Bodies.circle(x,y,22,opt)
        this.radius = 22
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        
    }
}