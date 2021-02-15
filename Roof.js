class Roof {
    constructor(x,y,width,height) {
      var options3 = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options3);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };