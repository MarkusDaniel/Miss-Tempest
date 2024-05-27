const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
var progress = 
canvas.width = 1024;
canvas.height = 576;
color = '#ffffff'
let gamerunning = false;
let backgroundmusic = new Audio('audio/BackgroundMusic.mp3')
backgroundmusic.volume = 0.3
let startGamesound = new Audio('audio/Start_Game.mp3')
let coin_sound = new Audio('audio/Coin_Pickup.mp3')
let pJumpsound = new Audio('audio/Player_Jump.mp3')
let doorsound = new Audio('audio/Door_Open.mp3')
let hurtsound = new Audio('audio/Player_Hurt.mp3')
let pattacksound = new Audio('audio/attacksound.mp3')
let gameoversound =new Audio('audio/game-over.mp3')
let bulletshootsound =new Audio('audio/laserShoot.wav')
let spawnEnemysound =new Audio('audio/spawnenemy.wav')
let winsound = new Audio('audio/winsquare.mp3')
let bossmusic = new Audio('audio/Boss_Music.mp3')
bossmusic.volume = 0.5
let dashsound = new Audio('audio/Dashsound.wav')
let parsedCollisions 
let collisionBlocks
let parsedPlatforms 
let platformBlocks
let background = new Sprite(
    {
        position: 
        {
             x: 0,
             y: 0,
        },
    imageSrc:'sprites/levels/Level_1.png',
    })

let doors = []
let animterrains = []
let gems = []
let obstacles = []
let enemys = []
let bosses = []
let foreground_elements = []
let gemcollected = 0
localStorage.setItem('gemcollected',0)
let deathcount = 0
const heartSprites = [];
let heartPositionX = 0;
gamerunning = true

function filltext(text, x, y, fontSize, color) {
    if (typeof color !== 'undefined') {
        context.fillStyle = color;
    }
    context.font = fontSize + 'px "Public Pixel", sans-serif'; // Specify the font family here
    context.fillText(text, x, y);
}
const player = new Player(
    {
        imageSrc:'sprites/Miss_Tempest/Miss_Tempest-idleRight.png',
        frameRate: 10,
        health: 3,
        animations:
        {
            idleRight:
            {
                frameRate: 10,
                frameBuffer: 7,
                loop: true,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-idleRight.png',
            },  
            idleLeft:
            {
                frameRate: 10,
                frameBuffer: 7,
                loop: true,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-idleLeft.png',
            },  
            runRight:
            {
                frameRate: 8,
                frameBuffer: 7,
                loop: true,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-RunRight.png',
            },  
            runLeft:
            {
                frameRate: 8,
                frameBuffer: 7,
                loop: true,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-RunLeft.png',
            } , 
            hurtRight:
            {
                frameRate: 2,
                frameBuffer: 2,
                loop: false,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-Hurt-Right.png',
            },
            hurtLeft:
            {
                frameRate: 2,
                frameBuffer: 2,
                loop: false,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-Hurt-Left.png',
            },
            attackRight:
            {
                frameRate:4,
                frameBuffer: 3,
                loop: false,
                imageSrc: 'sprites/Miss_Tempest/Miss_Tempest_Attack_Right.png'
            },
            attackLeft:
            {
                frameRate:4,
                frameBuffer: 3,
                loop: false,
                imageSrc: 'sprites/Miss_Tempest/Miss_Tempest_Attack_Left.png'
            },
            dashRight:
            {
                frameRate:3,
                frameBuffer: 3,
                loop: false,
                imageSrc: 'sprites/Miss_Tempest/Miss_Tempest-Dash_Right.png'
            },
            dashLeft:
            {
                frameRate:3,
                frameBuffer: 3,
                loop: false,
                imageSrc: 'sprites/Miss_Tempest/Miss_Tempest-Dash_Left.png'
            },
            doorIn:
            {
                frameRate: 8,
                frameBuffer: 6,
                loop: false,
                imageSrc:'sprites/Miss_Tempest/Miss_Tempest-DoorIn.png',
                onComplete: () =>
                {

                    gsap.to(overlay, 
                    {
                        opacity: 1,
                        onComplete: () => {
                            level++

                            if (level === 13){
                                level = 1
                                player.health = 3
                                backgroundmusic.pause()
                                gamerunning = false;
                                endGame()
                            }
                            levels[level].init()
                            player.switchSprite('idleRight')
                            player.preventInput = false
                            gsap.to(overlay,
                                {
                                    opacity: 0,
                                })
                        }
                    })
                }
            }
        },
    });



// Create heart UI sprites
for (let i = 0; i < player.health; i++) {
    const heartSprite = new Sprite({
        position: {
            x: heartPositionX + (i * 17 ), // Adjust x position
            y: 18,
        },
        imageSrc: 'sprites/menu_buttons/Heart.png',
    });
    heartSprites.push(heartSprite);
}

const keys =
{
    w: {pressed: false,},

    a: {pressed: false,},

    d: {pressed: false,},
    
    x: {pressed: false,},

    v: {pressed: false,},

}
const overlay =
{
    opacity:0
}
function resetPlayerAndLevel() {
    player.health = 3; // Reset player's health to default value
    levels[level].init(); // Restart the current level
    player.preventInput = true; // Enable player input
    player.switchSprite('idleRight'); // Switch player sprite to idleRights
    let gemcollected = parseInt(localStorage.getItem("gemcollected")) || 0;
    if (gemcollected < 10) {
        gemcollected = 0; // If less than 10, set to 0
    } else {
        gemcollected -= 10; // Otherwise, subtract 10
    }
    localStorage.setItem("gemcollected", gemcollected); // Decrement gemcollected by 10, ensuring it doesn't go below 0
    // Clear heartSprites array
    heartSprites.length = 0;
    // Create heartSprites
    heartSprites.push(...Array.from({ length: player.health }, (_, i) => {
        return new Sprite({
            position: {
                x: heartPositionX + (i * 17),
                y: 18,
            },
            imageSrc: 'sprites/menu_buttons/Heart.png',
        });
    }));
}

function resetgamestate() {
    player.health = 3; // Reset player's health to default value
    levels[level].init(); // Restart the current level
    player.switchSprite('idleRight'); // Switch player sprite to idleRights
    heartSprites.length = 0;
    // Create heartSprites
    heartSprites.push(...Array.from({ length: player.health }, (_, i) => {
        return new Sprite({
            position: {
                x: heartPositionX + (i * 17),
                y: 18,
            },
            imageSrc: 'sprites/menu_buttons/Heart.png',
        });
    }));
}

document.getElementById('resetbutton').addEventListener('click', function() {
    resetgamestate()
});

function sendScoreToServer(score, gemcollected) {
    gemcollected = parseInt(localStorage.getItem('gemcollected')) || 0;
    fetch('update-score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}&gemcollected=${gemcollected}` // Elküldjük a gemcollected adatot is
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Score updated successfully');
        } else {
            console.error('Error updating score:', data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateScore(newScore, gemcollected) {
    gemcollected = parseInt(localStorage.getItem('gemcollected')) || 0;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'update-score.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // További hibakereséshez
        }
    };
    xhr.send(`score=${newScore}&gemcollected=${gemcollected}`); // Elküldjük a gemcollected adatot is
}

function escapeKeyListener(event) {
    if (event.key === 'Escape') {
        if (gamePaused) {
            continueGame();
        } else {
            pauseGame();
        }
    }
}

// Define function to start the game loop
function startGame() {
    document.querySelector('.background').style.display = 'none';
    document.querySelector('.button-container').style.display = 'none'; 
    window.addEventListener('keydown', escapeKeyListener);
    level = 1
    gamerunning= true
    resetPlayerAndLevel();
    
    levels[level].init();
    player.preventInput = false;
    backgroundmusic.play();
    continueGame();
    
}

document.getElementById('startGameButton').addEventListener('click', function() {
    startGame();
    player.health = 3;
});

function endGame(){
    gemcollected = parseInt(localStorage.getItem('gemcollected'))
    updateScore(gemcollected);
    gamerunning= false
    context.clearRect(0, 0, canvas.width, canvas.height)
    backgroundmusic.pause();
    bossmusic.pause();
    gemcollected = 0;
    document.querySelector('.background').style.display = 'flex';
    document.querySelector('.button-container').style.display = 'flex';
    window.removeEventListener('keydown', escapeKeyListener);
}

let gamePaused = false;

function pauseGame() {
    gamePaused = true;
    backgroundmusic.pause();
    bossmusic.pause();
    document.querySelector('.pause_menu').style.display = 'flex';
    
}

function continueGame() {
    gamePaused = false;
    if (isWinsoundPlaying === false && level < 12) {
        backgroundmusic.play();
    } else if (isWinsoundPlaying === false && level === 12) {
        bossmusic.play();
    }
    document.querySelector('.pause_menu').style.display = 'none';
    animate();
}

document.getElementById('resumebutton').addEventListener('click', function() {
    document.querySelector('.pause_menu').style.display = 'none';
    continueGame();
});

document.getElementById('quitbutton').addEventListener('click', function() {
    checkUserProgress();
    endGame();
    document.querySelector('.pause_menu').style.display = 'none';
});

function saveGame() {
    const gameState = {
        level: level,
        health: player.health,
        gemcollected: gemcollected
    };

    fetch('save_game.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameState)
    })
    .then(response => response.json().then(data => ({
        status: response.status,
        body: data
    })))
    .then(({status, body}) => {
        if (status === 200) {
            alert(body.message);
        } else {
            alert('Failed to save the game: ' + body.error);
        }
    })
    .catch(error => {
        console.error('Error saving the game:', error);
        alert('Failed to save the game: ' + error.message);
    });
}
document.getElementById('saveButton').addEventListener('click', function() {
    saveGame();
    
});

let serverHealth = 3;
let serverGemCollected = 0;


function continueGameWithProgress() {
    fetch('progressiongame.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const userData = data.data;

                // Beállítjuk a játék változóit a lekért adatok alapján
                level = parseInt(userData.level);
                serverHealth = parseInt(userData.health);
                serverGemCollected = parseInt(userData.gemcollected);

                // Elindítjuk a játékot a mentett adatokkal
                document.querySelector('.background').style.display = 'none';
                document.querySelector('.button-container').style.display = 'none';
                window.addEventListener('keydown', escapeKeyListener);
                gamerunning = true;
                levels[level].init();
                player.preventInput = false;
                backgroundmusic.play();
                continueGame();
                
                player.health = serverHealth;
                localStorage.setItem('gemcollected', serverGemCollected);
            } else {
                console.error("Hiba: " + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('continueButton').addEventListener('click', function() {
    continueGameWithProgress();
    
});

function animate() {
    if (!gamerunning || gamePaused) return;  
    gemcollected = serverGemCollected;
    gemcollected = parseInt(localStorage.getItem('gemcollected')) || 0;
    if (level === 13) {
        gamerunning = false;
        backgroundmusic.pause();
        endGame();
        return;
    }

    const playerLeft = player.position.x + 34;
    const playerRight = player.position.x + player.width - 34;
    const playerTop = player.position.y + 10;
    const playerBottom = player.position.y + player.height;

    if (gamerunning === true) {
        window.requestAnimationFrame(animate);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();

    if(isWinsoundPlaying === false && level < 12){
        backgroundmusic.play();
    } else if (isWinsoundPlaying === false && level === 12){
        backgroundmusic.pause();
        bossmusic.play();
    }

    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillRect(0, 0, 70, 36);
    filltext('Gems:' + gemcollected, canvas.width - 1022, canvas.height - 564, 8, 'white');

    for (let i = 0; i < heartSprites.length; i++) {
        heartSprites[i].draw();
    }

    for (let i = 0; i < doors.length; i++) {
        doors[i].draw();
    }

    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
        obstacles[i].checkCollisionWithPlayer(player);
    }

    for (let i = 0; i < animterrains.length; i++) {
        animterrains[i].draw();
    }

    for (let i = 0; i < gems.length; i++) {
        gems[i].draw();

        const gemLeft = gems[i].position.x;
        const gemRight = gems[i].position.x + gems[i].width;
        const gemTop = gems[i].position.y;
        const gemBottom = gems[i].position.y + gems[i].height;

        if (playerRight > gemLeft &&
            playerLeft < gemRight &&
            playerBottom > gemTop &&
            playerTop < gemBottom) {
            gems.splice(i, 1);
            coin_sound.play();
            localStorage.setItem("gemcollected", gemcollected + 1);
            filltext();
        }
    }

    for (let i = 0; i < bosses.length; i++) {
        bosses[i].draw();
        bosses[i].updateBoss();
    }

    for (let i = 0; i < enemys.length; i++) {
        enemys[i].draw();
        enemys[i].updateEnemy();
    }

    player.handleInput(keys);
    player.draw();
    player.update();

    for (let i = 0; i < foreground_elements.length; i++) {
        foreground_elements[i].draw();
    }

    if (player.health <= 0 && heartSprites.length === 0) {
        player.switchSprite('idleRight');
        player.isInvincible = true;
        player.preventInput = true;
        player.velocity.x = 0;
        player.velocity.y = 0;
        deathcount += 1; 
        updateScore(gemcollected); 
        resetPlayerAndLevel();

        gsap.set(overlay, {
            opacity: 0,
        });

        gsap.to(overlay, {
            opacity: 1,
            duration: 1,
            onUpdate: () => {
                player.velocity.x = 0;
                player.velocity.y = 0;
                player.switchSprite('idleRight');
                filltext("You died!", canvas.width / 2 - 50, canvas.height / 2, 24, "red");
                backgroundmusic.pause();
                bossmusic.pause();
                gameoversound.play();
                player.isInvincible = false;
                player.preventInput = true;

                setTimeout(() => {
                    backgroundmusic.pause();
                    gsap.to(overlay, {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => {
                            player.switchSprite('idleRight');
                            player.velocity.x = 0;
                            player.velocity.y = 0;
                            player.preventInput = false;
                            player.isInvincible = false;
                            player.isAttacking = false;
                        }
                    });
                }, 1000);
            }
        });
    }

    if (player.position.y + player.height > 630) {
        resetPlayerAndLevel();
        localStorage.setItem("gemcollected", gemcollected + 10);
    }

    context.save();
    context.globalAlpha = overlay.opacity;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
}