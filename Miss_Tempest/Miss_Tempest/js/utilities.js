Array.prototype.parse2D = function()
{
    const rows = [];
    for (let i = 0; i < this.length; i+=32)
    {
        rows.push(this.slice(i, i + 32));
    }
    return rows
}

Array.prototype.ObjectCreation2D = function () {
    const objects = [];
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 310) {
                objects.push(
                    new CollisionBlock({
                        position: {
                            x: x * 32,
                            y: y * 32,
                        },
                    })
                );
            } else if (symbol === 309) { // Check for PlatformBlock
                objects.push(
                    new PlatformBlock({
                        position: {
                            x: x * 32,
                            y: y * 32,
                        },
                    })
                );
            }
        });
    });
    return objects;
};

// Function to check if the player is colliding with something vertically
function isColliding(player) {
    // Iterate over collision blocks
    for (let i = 0; i < player.collisionBlocks.length; i++) {
        const collisionBlock = player.collisionBlocks[i];
        if (
            player.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
            player.hitbox.position.x + player.hitbox.width >= collisionBlock.position.x &&
            player.hitbox.position.y + player.hitbox.height >= collisionBlock.position.y &&
            player.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height &&
            player.velocity.y === 0
        ) {
            return true; // Player is colliding
        }
    }
    
    // Iterate over platform blocks
    for (let i = 0; i < player.platformBlocks.length; i++) {
        const platformBlock = player.platformBlocks[i];
        if (
            player.hitbox.position.x <= platformBlock.position.x + platformBlock.width &&
            player.hitbox.position.x + player.hitbox.width >= platformBlock.position.x &&
            player.hitbox.position.y + player.hitbox.height >= platformBlock.position.y &&
            player.hitbox.position.y <= platformBlock.position.y + platformBlock.height - 63 &&
            player.velocity.y === 0 // Check if player is moving downward
        ) {
            return true; // Player is colliding with a platform block and moving downward
        }
    }
    
    return false; // Player is not colliding
}

function checkHurtAnimationFinished(enemy, player) {
    if (player.lastDirection === 'left') {
        enemy.switchSprite('hurtright');
    } else {
        enemy.switchSprite('hurtleft');
    }
    setTimeout(() => {

        const index = enemys.indexOf(enemy);
        if (index !== -1) {
            enemys.splice(index, 1);
        }
    }, 200);
}

let isWinsoundPlaying = false;

function HurtAnimationFinished(boss, player) {
    if (player.lastDirection === 'left') {
        boss.switchSprite('hurtright');
    } else {
        boss.switchSprite('hurtleft');
    }

    if (!isWinsoundPlaying) {

        backgroundmusic.pause();
        bossmusic.pause()

        isWinsoundPlaying = true;
        
        // Play winsound
        winsound.play();

        setTimeout(() => {
            winsound.pause();
            backgroundmusic.play();
            bossmusic.play()

            isWinsoundPlaying = false;
        }, 2700);
    }
    localStorage.setItem("gemcollected", gemcollected + 10)


    setTimeout(() => {
        const index = bosses.indexOf(boss);
        if (index !== -1) {
            bosses.splice(index, 1);
        }
        
    }, 400);
}
