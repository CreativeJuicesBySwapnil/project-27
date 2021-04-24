class Constraint {
    constructor(a,b) {
        var options = {
            bodyA: a,
            pointB: b,
            length: 200,
            stiffness: 0.4
        }
      this.connect = Matter.Constraint.create(options)
        this.pointb = b


      World.add(world,this.connect)
    }
    display(){
        line(this.connect.bodyA.position.x,this.connect.bodyA.position.y,this.pointb.x,this.pointb.y)
    }    
}