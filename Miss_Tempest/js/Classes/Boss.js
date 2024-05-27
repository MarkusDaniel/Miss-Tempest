class Boss extends Sprite
{
    constructor({
        imageSrc = 'sprites/Enemies/Boss_OctoEye/Boss_MedusEye_Fly_Left.png', 
        frameRate = 10,
        frameBuffer = 10,
        animations,
        loop,
        velocity,
        health = 10,
        position = { x: 800, y: 100 }
        
    })
    {
        super({imageSrc, frameRate, animations, loop })
        this.velocity = velocity
        this.position = position
        this.health = health;
        this.frameBuffer = frameBuffer
        this.health = health
        this.chaseSpeed = 0.5;
        this.isMoveing = true
        this.isCircling = false;
        this.lastHitTime = 0;
        this.bullets = [];
        this.barriers = [];
        this.lastBulletTime = Date.now();
        this.lastSpawnTime = Date.now();
    }
    createBarrier() {
        const barrierPosition = { x: 861, y: 64 }; // Specific position for the barrier
        const newBarrier = new Barrier(barrierPosition); // Create a new Barrier instance
        this.barriers.push(newBarrier); // Add the barrier to the barriers array
    }
    // Method to draw all barriers in the boss's barriers array
    drawBarriers() {
        for (let i = 0; i < this.barriers.length; i++) {
            const barrier = this.barriers[i];
            barrier.draw(); // Draw the barrier
        }
    }

    // Method to handle collisions between player and barriers
    handleBarrierCollisions(player) {
        for (let i = 0; i < this.barriers.length; i++) {
            const barrier = this.barriers[i];
            barrier.collision(player); // Check collision with player
        }
    }

    updateBoss(){
        // Calculate direction vector towards the player
        if(this.isMoveing === true || this.isCircling === true){
            if (this.chaseSpeed > 0 && player.position.x > this.position.x + 50) {
                this.switchSprite('moveRight');
            } else if (this.chaseSpeed > 0 && player.position.x < this.position.x) {
                this.switchSprite('moveLeft');}

        }
        const currentTime = Date.now();
        if(this.health < 4){
            if(this.isCircling === true ){
                if (currentTime - this.lastBulletTime >= 3000) {
                    this.shootBullet()
                    bulletshootsound.play();
                    this.lastBulletTime = currentTime;
                }
            }
        }

        if(this.isMoveing === true){
            if (currentTime - this.lastBulletTime >= 7000) {
                this.shootBullet();
                bulletshootsound.play()
                this.lastBulletTime = currentTime;
            }

        }
        if(this.isMoveing === true && this.health < 3){
            if (currentTime - this.lastBulletTime >= 5000) {
                this.shootBullet();
                bulletshootsound.play()
                this.chaseSpeed = 1
                this.lastBulletTime = currentTime;
            }

        }
        if(this.health <= 4){
            if (currentTime - this.lastSpawnTime >= 5000 ) {
                this.lastSpawnTime = currentTime;
                if (Math.random() < 0.3 ) { 
                    spawnEnemysound.play()
                    this.spawnEnemy();
                    this.lastSpawnTime = currentTime;
                }
    
            }
        }

        if (this.isCircling) {
            this.circleAroundCenter(player);
        } else {
            this.chasePlayer(player);}
            this.createBarrier(); // Create a barrier immediately (you can trigger this based on a specific condition)

            // Draw and handle collisions for all barriers
            this.drawBarriers(); // Draw all barriers
            this.handleBarrierCollisions(player);
        this.drawBullets()
        this.updateBullets()
        this.checkCollisionWithPlayer(player)
        this.getHit(player)

    }
    chasePlayer(player){
        const minX = 230; 
        const maxX = 900; 
        const minY = 64;  
        const maxY = 450; 
        const dx = player.position.x - this.position.x;
        const dy = player.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / distance;
        const directionY = dy / distance;
        const velocityX = directionX * this.chaseSpeed;
        const velocityY = directionY * this.chaseSpeed;
        this.position.x += velocityX;
        this.position.y += velocityY;
        if (this.position.x < minX) {
            this.position.x = minX;
        } else if (this.position.x > maxX) {
            this.position.x = maxX;
        }
    
        if (this.position.y < minY) {
            this.position.y = minY;
        } else if (this.position.y > maxY) {
            this.position.y = maxY;
        }
    
        // Check if player is within the allowed boundary range
        const playerInRange =
            player.position.x >= minX &&
            player.position.x <= maxX &&
            player.position.y >= minY &&
            player.position.y <= maxY;
        // If player is outside the boundary range, navigate around the boundary
        if (!playerInRange) {
            // Calculate a point outside the boundary opposite to the player's position
            const targetX = player.position.x < minX ? maxX + 10 : minX - 10;
            const targetY = player.position.y < minY ? maxY + 10 : minY - 10;
    
            // Move towards the calculated target position
            const dxTarget = targetX - this.position.x;
            const dyTarget = targetY - this.position.y;
            const distanceTarget = Math.sqrt(dxTarget * dxTarget + dyTarget * dyTarget);
            const directionXTarget = dxTarget / distanceTarget;
            const directionYTarget = dyTarget / distanceTarget;
            const velocityXTarget = directionXTarget * this.chaseSpeed;
            const velocityYTarget = directionYTarget * this.chaseSpeed;
    
            // Update boss's position to navigate around the boundary
            this.position.x += velocityXTarget;
            this.position.y += velocityYTarget;
        }
    }

    circleAroundCenter() {
        const centerX = 565; // Center X coordinate
        const centerY = 255; // Center Y coordinate
        const radius = 190; // Radius of circular movement
        
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.lastHitTime;
        const angularSpeed = this.chaseSpeed*0.5 / radius; // Angular speed based on chase speed and radius

        const angle = elapsedTime * angularSpeed; // Calculate angle based on elapsed time and angular speed
    
        // Calculate new position using polar coordinates (centerX, centerY as center)
        this.position.x = centerX + radius * Math.cos(angle);
        this.position.y = centerY + radius * Math.sin(angle);
        if (elapsedTime >= 10000) {
            this.isCircling = false;
            this.chasePlayer(player)
            this.resetAnimations();
        }
    }

    checkCollisionWithPlayer(player) {
    const playerLeft = player.position.x + 30; // Adjusted for hitbox
    const playerRight = player.position.x + player.width - 30; 
    const playerTop = player.position.y + 6; 
    const playerBottom = player.position.y + player.height;
    if (
        playerRight >= this.position.x+10 &&
        playerLeft <= this.position.x +10 + this.width-20 &&
        playerBottom >= this.position.y + 10 &&
        playerTop <= this.position.y +10 + this.height -15
    ){
        if (!player.isInvincible) { 
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
        // Check if the player is attacking
        if (player.isAttacking === true) {
            // Check which direction the player is facing
            if (player.lastDirection === 'left') {
                // Check collision from left side
                if (player.position.x <= this.position.x + 10 + this.width - 20 &&
                    player.position.x + player.width - 30 >= this.position.x + 10 &&
                    player.position.y + 20 + player.height - 30 >= this.position.y + 10 &&
                    player.position.y + 20 <= this.position.y + 10 + this.height - 20) {
                    // Execute only if the enemy is not invincible
                    if (!this.isInvincible) {
                        // Switch sprite to 'hurtright'
                        this.switchSprite('hurtright');
                        // Set enemy as invincible and stop movement temporarily
                        this.isInvincible = true;
                        this.isMoveing = false;
                        // Record the last hit time
                        this.lastHitTime = Date.now();
                        // Decrease enemy health
                        this.health -= 1;
                        // Play hurt sound
                        hurtsound.play();
    
                        // Reset to chasing if hit while circling
                        if (this.isCircling) {
                            this.isCircling = false;
                            this.resetAnimations();
                            this.chasePlayer(player);
                        }
    
                        // Set a timeout to revert invincibility and reset animations
                        setTimeout(() => {
                            this.isInvincible = false;
                            this.chaseSpeed = 0.5;
                            this.isMoveing = true;
                            this.resetAnimations();
                            // Set a timeout to switch back to circling mode after a delay
                            setTimeout(() => {
                                this.isInvincible = false;
                                this.chaseSpeed = 0.5;
                                this.isCircling = true;
                                this.resetAnimations();
                            }, 1500);
                        }, 200);
                    }
                }
                
            } else if (player.lastDirection === 'right') {
                // Check collision from right side
                if (player.position.x + 30 <= this.position.x + 3 + this.width - 3 &&
                    player.position.x + 30 + player.width - 30 >= this.position.x + 3 &&
                    player.position.y + 20 + player.height - 30 >= this.position.y &&
                    player.position.y + 20 <= this.position.y + this.height) {
                    // Execute only if the enemy is not invincible
                    if (!this.isInvincible) {
                        this.switchSprite('hurtleft');
                        this.isInvincible = true;
                        this.isMoveing = false;
                        this.lastHitTime = Date.now();
                        this.health -= 1;
                        hurtsound.play();
                        if (this.isCircling) {
                            this.isCircling = false;
                            this.resetAnimations();
                            this.chasePlayer(player);
                        }
                        setTimeout(() => {
                            this.isInvincible = false;
                            this.chaseSpeed = 0.5;
                            this.isMoveing = true;
                            this.resetAnimations();
                            setTimeout(() => {
                                this.isInvincible = false;
                                this.chaseSpeed = 0.5;
                                this.isCircling = true;
                                this.resetAnimations();
                            }, 1500);
                        }, 200);
                    }
                }
            }
        }
    
        for (let i = 0; i < bosses.length; i++) {
            let boss = bosses[i];
        
            if (boss.health <= 0) {
                
                if (player.lastDirection === 'left') {
                    boss.switchSprite('hurtright');
                } else {
                    boss.switchSprite('hurtleft');
                }
                HurtAnimationFinished(boss, player)
                break;
            }
        }
    }

    resetAnimations() {
        if (this.chaseSpeed > 0) {
            this.switchSprite('moveRight');
        } else if (this.chaseSpeed > 0) {
            this.switchSprite('moveLeft');
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
    
    drawBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            bullet.draw(); 
        }
    }


    shootBullet() {
        const bulletSpeed = 4;
        const dx = player.position.x - this.position.x;
        const dy = player.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / distance;
        const directionY = dy / distance;
        const bulletVelocity = {
            x: directionX * bulletSpeed,
            y: directionY * bulletSpeed
        };

        const bullet = new Bullet({ x: this.position.x +30, y: this.position.y +30 }, bulletVelocity);
        this.bullets.push(bullet);
    }
    updateBullets() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const bullet = this.bullets[i];
            bullet.update(); 
            if (
                bullet.position.x < 0 ||
                bullet.position.x > canvas.width ||
                bullet.position.y < 0 ||
                bullet.position.y > canvas.height
            ) {
                this.bullets.splice(i, 1);
            }
            const playerLeft = player.position.x + 30; // Adjusted for hitbox
            const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
            const playerTop = player.position.y + 6; // Adjusted for hitbox
            const playerBottom = player.position.y + player.height;
            //remove if bullet hit player
            if( playerRight > bullet.position.x &&
                playerLeft < bullet.position.x + bullet.width &&
                playerBottom > bullet.position.y &&
                playerTop < bullet.position.y + bullet.height
            ){
                this.bullets.splice(i, 1);
            }
        }
    }

    spawnEnemy() {
        // Area where enemies can spawn
        const spawnArea = {
            minX: 280,
            maxX: 820,
            minY: 150,
            maxY: 400
        };

        // Randomly generate position within the spawn area
        const randomX = Math.floor(Math.random() * (spawnArea.maxX - spawnArea.minX + 1)) + spawnArea.minX;
        const randomY = Math.floor(Math.random() * (spawnArea.maxY - spawnArea.minY + 1)) + spawnArea.minY;

        // Create a new Enemy instance with random position and specified attributes
        let enemy = new Enemy({
            position: { x: randomX, y: randomY },
            originalPosition: { x: randomX, y: randomY },
            health: 2,
            imageSrc: 'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
            frameRate: 8,
            frameBuffer: 6,
            animations:{
                moveUpRight:{
                    frameRate: 8,
                    frameBuffer: 6,
                    loop: true,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Right.png',
                },
                moveDownRight:{
                    frameRate: 5,
                    frameBuffer: 6,
                    loop: true,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Right.png',
                },
                moveUpLeft:{
                    frameRate: 8,
                    frameBuffer: 6,
                    loop: true,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_UP_Left.png',
                },
                moveDownLeft:{
                    frameRate: 5,
                    frameBuffer: 6,
                    loop: true,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Down_Left.png',
                },
                hurtleft:{
                    frameRate: 2,
                    frameBuffer:2,
                    loop: false,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Left.png',
                },
                hurtright:{
                    frameRate: 2,
                    frameBuffer:2,
                    loop: false,
                    imageSrc:'sprites/Enemies/MedusEye/MeduseEye_Hurt_Right.png',
                }},
            horizontalspeed:0, verticalspeed:2, distance:90})

        // Push the new enemy into the enemies array
        enemys.push(enemy);
        enemy.updateEnemy()
    }
}