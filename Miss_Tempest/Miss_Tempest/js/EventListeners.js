let lastXPressTime = 0;
let lastVPressTime = 0;
window.addEventListener('keydown',(event) =>
{
    if (player.preventInput) return
    switch (event.key)
    {
        case 'w': //jump
        case 'ArrowUp':
            for(let i = 0; i < doors.length; i++)
            {
                const door = doors[i]
                if(player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width
                    && player.hitbox.position.x  >= door.position.x
                    && player.hitbox.position.y + player.hitbox.height >= door.position.y
                    && player.hitbox.position.y <= door.position.y + door.height)
                    {
                        player.velocity.x = 0
                        player.velocity.y = 0
                        player.preventInput = true
                        player.switchSprite('doorIn')
                        doorsound.play()
                        door.play()
                        return
                    }
            }
            if (player.velocity.y === 0 && isColliding(player)) {
                pJumpsound.currentTime = 0; // Rewind to the beginning to allow rapid successive jumps
                pJumpsound.play();
            }
            
            if (player.velocity.y === 0 && isColliding(player))
            player.velocity.y = -13;
            break;

        case 'a': //left
        case 'ArrowLeft':
            keys.a.pressed =true;
            break;

        case 'd': //right
        case 'ArrowRight':
            keys.d.pressed =true;
            break;


        
        case 'x' :
            const currentTime = Date.now();
            if (currentTime - lastXPressTime < 700) { 
                return; 
            }
            lastXPressTime = currentTime; 
            xPressedTime = Date.now();
            keys.x.pressed = true;
            pattacksound.currentTime = 0; 
            pattacksound.play();
            player.isAttacking = true;
            player.velocity.x = 0;
            player.preventInput = true;
            if (player.isAttacking) {
                if (player.lastDirection === 'left') {
                    player.switchSprite('attackLeft');
                } else {
                    player.switchSprite('attackRight');
                }
            }
            setTimeout(() => {
                player.isAttacking = false;
                if (player.lastDirection === 'left') {
                    player.switchSprite('idleLeft');
                } else {
                    player.switchSprite('idleRight');
                }
            }, 150);
            break;

        case 'v' :
            const currentVTime = Date.now();
            if (currentVTime - lastVPressTime < 1500) { 
                return; 
            }
            lastVPressTime = currentVTime; 
            vPressedTime = Date.now();
            keys.v.pressed = true;
            dashsound.currentTime = 0; 
            dashsound.play();
            player.isDashing = true;
            player.preventInput = true;
            player.velocity.y = 0;
            if (player.isDashing) {
                if (player.lastDirection === 'left') {
                    player.switchSprite('dashLeft');
                    player.velocity.x = -18;
                } else {
                    player.velocity.x = 18;
                    player.switchSprite('dashRight');
                }
            }
            setTimeout(() => {
                player.isDashing = false;
                player.velocity.x = 0;
                if (player.lastDirection === 'left') {
                    player.switchSprite('idleLeft');
                } else {
                    player.switchSprite('idleRight');
                }
            }, 120);
            break;


    }
})




window.addEventListener('keyup',(event) =>
{
    switch (event.key)
    {
        case 'a': //left
        case 'ArrowLeft':
            keys.a.pressed = false;
            break;

        case 'd': //right
        case 'ArrowRight':
            keys.d.pressed = false;
            break;

        case 'x':
            keys.x.pressed = false;
            player.isAttacking =false;
            player.preventInput = false;
            break
        case 'v':
            keys.v.pressed = false;
            player.isDashing =false;
            player.preventInput = false;
            break
    

    }
})