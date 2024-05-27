class Enemy extends Sprite
{
    constructor({
        imageSrc, 
        frameRate,
        animations,
        loop,
        health = 1,
        horizontalspeed = 0,
        verticalspeed = 0,
        distance,
        frameBuffer,
        position = { x: 100, y: 100 }
        
    })
    {
        super({imageSrc, frameRate, animations, loop })
        this.position = position

        this.velocity = 
        {
            x:0,
            y:0
        }

        this.health = health;
        this.velocity.x = horizontalspeed
        this.velocity.y = verticalspeed
        this.distance = distance
        this.frameBuffer = frameBuffer
        this.originalPosition = { 
        x: this.position.x, y: this.position.y };
        this.health = health
        this.horizontalspeed = horizontalspeed; // Store initial horizontal speed
        this.verticalspeed = verticalspeed; // Store initial vertical speed
        this.isMoving = true; // Flag to control movement
        this.hasDroppedGem = false;
        
   
    }
    updateEnemy(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.checkCollisionWithPlayer(player)
        this.movement(player)
        this.getHit(player)
        if (this.health <= 0 && !this.hasDroppedGem) {
            const randomNumber = Math.random();
            if (randomNumber < 0.3) {
                // Create a new gem instance
                const gem = new Gem({
                    position: { x: this.position.x +5, y: this.position.y - 12 }

                });

                gems.push(gem);
            }
            this.hasDroppedGem = true;
        }
    }

    checkCollisionWithPlayer(player) {
    const playerLeft = player.position.x + 30; // Adjusted for hitbox
    const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
    const playerTop = player.position.y + 6; // Adjusted for hitbox
    const playerBottom = player.position.y + player.height;
    if (
        playerRight >= this.position.x+6 &&
        playerLeft <= this.position.x + this.width-6 &&
        playerBottom >= this.position.y &&
        playerTop <= this.position.y + this.height
    ){
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
        }
    }
    }

    getHit(player) {
        if (player.isAttacking === true) {
            if (player.lastDirection === 'left'){
                if (player.position.x <= this.position.x -3 + this.width +3 &&
                    player.position.x + player.width -30 >= this.position.x + 3&&
                    player.position.y + 20 + player.height - 30 >= this.position.y &&
                    player.position.y + 20 <= this.position.y + this.height) {
                    if (!this.isInvincible) {
                        this.switchSprite('hurtright')
                        this.velocity.x = 0;
                        this.velocity.y = 0;
                        this.isMoving = false;
                        this.isInvincible = true;
                        this.health -= 1;
                        hurtsound.play();
                        setTimeout(() => {
                            this.isInvincible = false;
                            this.velocity.x = this.horizontalspeed;
                            this.velocity.y = this.verticalspeed;
                            this.isMoving = true; // Resume movement
                            this.resetAnimations();
                        }, 200);
                    }
                }

            }
            else{
                if (player.position.x +30 <= this.position.x +3 + this.width -3 &&
                    player.position.x +30 + player.width -30 >= this.position.x + 3&&
                    player.position.y + 20 + player.height - 30 >= this.position.y &&
                    player.position.y + 20 <= this.position.y + this.height) {
                    if (!this.isInvincible) {
                        this.switchSprite('hurtleft')
                        this.velocity.x = 0;
                        this.velocity.y = 0;
                        this.isMoving = false;
                        this.isInvincible = true;
                        this.health -= 1;
                        hurtsound.play();
                        setTimeout(() => {
                            this.isInvincible = false;
                            this.velocity.x = this.horizontalspeed;
                            this.velocity.y = this.verticalspeed;
                            this.isMoving = true; // Resume movement
                            this.resetAnimations();
                        }, 200);
                    }
                }

            }
        }
        for (let i = 0; i < enemys.length; i++) {
            let enemy = enemys[i];
        
            if (enemy.health <= 0) {
                enemy.isMoving = false;
                if (player.lastDirection === 'left') {
                    enemy.switchSprite('hurtright');
                } else {
                    enemy.switchSprite('hurtleft');
                }
                checkHurtAnimationFinished(enemy, player)
                //enemys.splice(i, 1);
                break;
            }
        }
    }
    
    movement(player) {
        if (!this.isMoving) {
            // If not moving, don't update position
            return;
        }
        // Check if the enemy is moving horizontally
        if (this.velocity.x !== 0 && this.velocity.y === 0) {
            // Check if the enemy has reached its maximum distance from its original position
            if (Math.abs(this.position.x - this.originalPosition.x) >= this.distance) {
                // Reverse direction
                this.velocity.x *= -1;

                if (this.velocity.x > 0) {
                    this.switchSprite('moveRight');
                } else {
                    this.switchSprite('moveLeft');
                }
            } else if (Math.abs(this.position.x - this.originalPosition.x) <= 0) {
                // Reset position if back to original position
                this.position.x = this.originalPosition.x;
            }
            
            // Switch sprite immediately after the first movement segment
            if (Math.abs(this.position.x - this.originalPosition.x) === this.distance) {
                if (this.velocity.x > 0) {
                    this.switchSprite('moveRight');
                } else {
                    this.switchSprite('moveLeft');
                }
            }
        } 
        // Check if the enemy is moving vertically
        else if (this.velocity.y !== 0 && this.velocity.x === 0) {
            // Check if the enemy has reached its maximum distance from its original position
            if (Math.abs(this.position.y - this.originalPosition.y) >= this.distance) {
                // Reverse direction
                this.velocity.y *= -1;
                if (this.velocity.y < 0) {
                    this.switchSprite('moveUpRight');
                } else {
                    this.switchSprite('moveDownRight');
                }

                // Switch sprite if needed (not shown for vertical movement in your code)
            } else if (Math.abs(this.position.y - this.originalPosition.y) <= 0) {
                // Reset position if back to original position
                this.position.y = this.originalPosition.y;
            }
            if (this.velocity.y < 0 && player.position.x+20 > this.position.x) {
                this.switchSprite('moveUpRight');
            } else if (this.velocity.y > 0 && player.position.x+20 > this.position.x) {
                this.switchSprite('moveDownRight');
            } else if (this.velocity.y < 0 && player.position.x+20 < this.position.x) {
                this.switchSprite('moveUpLeft');
            } else if (this.velocity.y > 0 && player.position.x+20 < this.position.x) {
                this.switchSprite('moveDownLeft');
            }

        
    }
    }


    resetAnimations() {
        // Reset the sprite based on current velocity
        if (this.velocity.x > 0) {
            this.switchSprite('moveRight');
        } else if (this.velocity.x < 0) {
            this.switchSprite('moveLeft');
        } else if (this.velocity.y < 0) {
            this.switchSprite('moveUpRight');
        } else if (this.velocity.y > 0) {
            this.switchSprite('moveDownRight');
        }
    }

    switchSprite(name)
    {
        if(this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate =this.animations[name].frameRate
        this.frameBuffer=this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
    }
}