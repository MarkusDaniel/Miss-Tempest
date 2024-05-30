class Obstacle extends Sprite {
    constructor({
        imageSrc = 'sprites/Obstacles/Spike.png', 
        frameRate =1,
        frameBuffer =1,
        loop = false,
        autoplay = false,
        position,
    }) {
        super({ position, imageSrc, frameRate, loop, frameBuffer, autoplay });
        this.position = position; // Assign position to the obstacle
        this.width = this.image.width / this.frameRate
        this.height = this.image.height 
        this.frameBuffer = frameBuffer
    }

    checkCollisionWithPlayer(player) {
        const playerLeft = player.position.x + 30; // Adjusted for hitbox
        const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
        const playerTop = player.position.y + 6; // Adjusted for hitbox
        const playerBottom = player.position.y + player.height;
        if (
            playerRight > this.position.x+6 &&
            playerLeft < this.position.x + this.width-6 &&
            playerBottom > this.position.y &&
            playerTop < this.position.y + this.height
        ) {
            if (!player.isInvincible) { // Check if player is currently invincible
                if (player.lastDirection === 'left') {
                    player.switchSprite('hurtLeft');
                } else {
                    player.switchSprite('hurtRight');
                }
                player.preventInput = true
                player.isAttacking =false;
                player.velocity.x = 0
                player.health -= 1;
                heartSprites.pop()
                hurtsound.play();
                player.isInvincible = true; 
                // Set a timer to make player vulnerable again after a delay
                setTimeout(() => {
                    player.preventInput = false;
                }, 200);
                setTimeout(() => {
                    player.isInvincible = false;
                }, 1000); // Adjust the delay as needed (in milliseconds)
         
        }   }
    }
}

