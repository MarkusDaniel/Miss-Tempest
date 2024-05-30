class Barrier extends Sprite {
    constructor(position = { x: 928, y: 64 }, ) {
        super({
            imageSrc: 'sprites/Obstacles/Barrier.png',
            frameRate: 1, 
            animations: { default: { imageSrc: 'sprites/Obstacles/Barrier.png', frameRate: 1, frameBuffer: 1, loop: false } },
            loop: false
        });
        this.position = position

       
    }

    collision(player) {
        const playerLeft = player.position.x + 30; // Adjusted for hitbox
        const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
        const playerTop = player.position.y + 6; // Adjusted for hitbox
        const playerBottom = player.position.y + player.height;

        if (playerRight > this.position.x &&
            playerLeft < this.position.x + this.width &&
            playerBottom > this.position.y &&
            playerTop < this.position.y + this.height)  {
                if(player.velocity.x < 0)
                {
                    const offset = player.hitbox.position.x - player.position.x
                    player.position.x = 
                    this.position.x + this.width - offset + 0.01
                    
                }
                if(player.velocity.x > 0)
                {
                    const offset = player.hitbox.position.x - player.position.x + player.hitbox.width
                    player.position.x = 
                    this.position.x - offset - 0.01
                    
                }
        }
    }
   
}