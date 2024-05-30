class Bullet extends Sprite {
    constructor(position, velocity) {
        super({
            imageSrc: 'sprites/Obstacles/Bullet.png',
            frameRate: 8, 
            animations: { default: { imageSrc: 'sprites/Obstacles/Bullet.png', frameRate: 8, frameBuffer: 8, loop: true } },
            loop: true
        });
        this.position = position;
        this.velocity = velocity;
       
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.hit(player)

    }
    hit(player) {
        const playerLeft = player.position.x + 30; // Adjusted for hitbox
        const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
        const playerTop = player.position.y + 6; // Adjusted for hitbox
        const playerBottom = player.position.y + player.height;
        if (
            playerRight > this.position.x &&
            playerLeft < this.position.x + this.width &&
            playerBottom > this.position.y &&
            playerTop < this.position.y + this.height
        )         if (!player.isInvincible) { // Check if player is currently invincible
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
            }, 1000);
            

        }
    }
}