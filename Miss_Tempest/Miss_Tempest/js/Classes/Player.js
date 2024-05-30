class Player extends Sprite
{
    constructor({
        collisionBlocks = [],
        platformBlocks = [],
        imageSrc, 
        frameRate,
        animations,
        loop,
        gemcollected,
        health = serverHealth,

    })
    {
        super({imageSrc, frameRate, animations, loop })
        this.position =
        {
            x: 100,
            y: 100
        }
        this.velocity = 
        {
            x:0,
            y:0
        }

        this.sides =
        {
            bottom: this.position.y + 
            this.height,
        }
        this.gravity = 0.6
        this.collisionBlocks = collisionBlocks
        this.platformBlocks = platformBlocks
        this.gemcollected = gemcollected
        this.health = health;
        this.isAttacking = false;
        this.isDashing = false;

    }

    update()
    {
        this.position.x += this.velocity.x;
        this.updatehitbox();
        this.checkHorizontalColls();
        if(this.isDashing === false){
            this.applyGravity();
        } else{
            this.velocity.y = 0
        }
        this.updatehitbox();
        this.checkVerticalColls();
        if (this.health <= -1) this.health= 0 

    }
    
    handleInput(keys)
    {
        if (this.preventInput) return
        this.velocity.x = 0;
    
        if(keys.d.pressed)
        {
            this.switchSprite('runRight')
            this.velocity.x = 3
            this.lastDirection = 'right'
        }
        else if (keys.a.pressed)
        {
            this.switchSprite('runLeft')
            this.velocity.x = -3
            this.lastDirection = 'left'
        }
        else 
        {
            if (this.lastDirection === 'left')
            {
                this.switchSprite('idleLeft')
            }
            else
            {
                this.switchSprite('idleRight')
            }
        }

        if (keys.x.pressed) {
            if(this.isAttacking === true){
                if (this.lastDirection === 'left')
                {
                    this.switchSprite('attackLeft')
                }
                else
                {
                    this.switchSprite('attackRight')
                }
            }

        } 

        if (keys.v.pressed) {
            if(this.isDashing === true){
                if (this.lastDirection === 'left')
                {
                    this.switchSprite('dashLeft')
                }
                else
                {
                    this.switchSprite('dashRight')
                }
            }

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

    updatehitbox()
    {
        this.hitbox = 
        {
            position: 
            {
                x: this.position.x +30,
                y: this.position.y +8,
            },
            width: 23,
            height:50,
        }
    }
    applyGravity()
    {
        this.velocity.y += this.gravity;

        // Cap the downward velocity to avoid excessive falling speed
        const maxFallSpeed = 12;
        if (this.velocity.y > maxFallSpeed) {
            this.velocity.y = maxFallSpeed;
        }
    
        this.position.y += this.velocity.y;
    }

    checkHorizontalColls()
    {
        for(let i=0; i < this.collisionBlocks.length; i++)
        {
            const collisionBlock = this.collisionBlocks[i]
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x
                && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
                && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height)
            {
                if(this.velocity.x < -0)
                {
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = 
                    collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }
                if(this.velocity.x > 0)
                {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = 
                    collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }

    }

    checkVerticalColls()
    {
        for(let i=0; i < this.collisionBlocks.length; i++)
        {
            const collisionBlock = this.collisionBlocks[i]
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x
                && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
                && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height)
            {
                if(this.velocity.y < 0 )
                {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = 
                    collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }
                if(this.velocity.y > 0)
                {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y -this.position.y + this.hitbox.height
                    this.position.y = 
                    collisionBlock.position.y - offset - 0.01
                    break
                }
            }
        }
        //platform
        for(let i=0; i < this.platformBlocks.length; i++)
        {
            const platformBlock = this.platformBlocks[i]
            if(
                this.hitbox.position.x <= platformBlock.position.x + platformBlock.width
                && this.hitbox.position.x + this.hitbox.width >= platformBlock.position.x
                && this.hitbox.position.y + this.hitbox.height >= platformBlock.position.y
                && this.hitbox.position.y <= platformBlock.position.y + platformBlock.height-63)
            {

                if(this.velocity.y > 0 && this.hitbox.position.y + this.hitbox.height > platformBlock.position.y)
                {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y -this.position.y + this.hitbox.height
                    this.position.y = 
                    platformBlock.position.y - offset - 0.01
                    break
                }

            }
        }
    }
}