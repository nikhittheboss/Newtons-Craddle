class Bob {
    constructor(x,y){
        var options ={
            isstatic:false,
            density : 1.2,
            friction : 0.5,
            restitution : 0.3
          }
          
          this.bob = Bodies.circle(x, y, 23 ,options)
          World.add(world,this.bob)
    }
    display(){
      var angle = this.bob.angle;
    push()
    translate(this.bob.position.x,this.bob.position.y)
  
    //imageMode()
    ellipseMode(RADIANS)
      ellipse(0,0,70,70)
    pop()
    }
    }