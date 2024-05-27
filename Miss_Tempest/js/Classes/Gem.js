class Gem extends Sprite {
    constructor({ position, frameRate = 10, loop = true, frameBuffer = 5, autoplay = true }) {
        const imageSrcs = ['sprites/Collectables/YellowGem-Sheet.png','sprites/Collectables/Gem-sparcle.png', 'sprites/Collectables/Emerald.png', 'sprites/Collectables/BlueGem.png'];
        const randomIndex = Math.floor(Math.random() * imageSrcs.length);
        const imageSrc = imageSrcs[randomIndex];
        super({ position, imageSrc, frameRate, loop, frameBuffer, autoplay });
    }

    // Override method to handle collection
    collect(player) {
        const playerLeft = player.position.x + 30; // Adjusted for hitbox
        const playerRight = player.position.x + player.width - 30; // Adjusted for hitbox
        const playerTop = player.position.y + 6; // Adjusted for hitbox
        const playerBottom = player.position.y + player.height;
        if (
            playerRight > this.position.x &&
            playerLeft < this.position.x + this.width &&
            playerBottom > this.position.y &&
            playerTop < this.position.y + this.height
        ) {
            gems.splice(gems.indexOf(gem), 1);
            coin_sound.play();
            player.gemcollected++;
            localStorage.setItem("gemcollected", parseInt(localStorage.getItem("gemcollected")) + 1)
            filltext()
        }
    }
}