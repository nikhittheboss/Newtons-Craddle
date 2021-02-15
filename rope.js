class Rope{
    constructor(bodya,bodyb,offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options2 = {
            bodyA: bodya,
            bodyB:bodyb,
            pointB:{x:this.offsetX, y:this.offsetY},
    
        }
    
        this.rope = Constraint.create(options2)
        World.add(world,this.rope)
    }
    display(){
        var point1 = this.rope.bodyA.position;
           var point2 = this.rope.bodyB.position;
           
           strokeWeight(2);

           var Anchor1X = point1.x;
           var Anchor1Y = point1.y;

           var Anchor2X = point2.x + this.offsetX;
           var Anchor2Y = point2.y + this.offsetY;

           line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}''