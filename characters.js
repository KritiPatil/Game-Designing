class Character {
    constructor(x, y, lenght, width) {
      var options = {
          restitution : 0.3,
          friction : 0.1,
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, lenght, width, options);
      this.width = width;
      this.lengt = lenght;
  
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill ("white");
      rect(0, 0, this.lenght, this.width);
      pop();
      //console.log(pos.y);
      }

  };