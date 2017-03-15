class ShipController{
  constructor(x, y, spriteName, configs){
      this.sprite = Nakama.game.add.sprite(x,y,'assets', spriteName);
      Nakama.game.physics.arcade.enable(this.sprite);
      this.configs = configs;
      this.sprite.body.collideWorldBounds = true;
  }
  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
      console.log("UP button pressed");
      this.sprite.body.velocity.y = -ShipController.SHIP_SPEED;
    }else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = ShipController.SHIP_SPEED;
    }else{
      this.sprite.body.velocity.y = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -ShipController.SHIP_SPEED;
    }else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = ShipController.SHIP_SPEED;
    }else {
      this.sprite.body.velocity.x = 0;
    }
  }
}
ShipController.SHIP_SPEED = 400;