// Escena 9: Trampa 1
class Escena9 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena9' });
    }

    preload() {
        this.load.image('escena9', 'imatges/escena9_trampa1.jpg');
        this.load.audio('sonido_muerte', 'so/Roblox Death Sound - OOF _ Sound Effect HD - HomeMadeSoundEffects.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena9');
        this.sound.play('sonido_muerte');
    }
}

// Escena 10: Trampa 2
class Escena10 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena10' });
    }

    preload() {
        this.load.image('escena10', 'imatges/escena10_trampa2.jpg');
        this.load.audio('sonido_muerte', 'so/Roblox Death Sound - OOF _ Sound Effect HD - HomeMadeSoundEffects.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena10');
        this.sound.play('sonido_muerte');
    }
}

// Escena 11: Banana brillante
class Escena11 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena11' });
    }

    preload() {
        this.load.image('escena11', 'imatges/escena11_banana.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'escena11');
        const banana = this.add.zone(420, 250, 120, 140).setOrigin(0).setInteractive();
        banana.once('pointerdown', () => this.scene.start('escena12'));
    }
}

// Escena 12: Final feliç
class Escena12 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena12' });
    }

    preload() {
        this.load.image('escena12', 'imatges/escena12_final.jpg');
        this.load.audio('sonido_victoria', 'so/Victory Sound Effect.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena12');
        this.sound.stopAll();
        this.sound.play('sonido_victoria');
    }
}

// Redimensionament
function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowHeight + 'px';
}

// Configuració del joc
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scene: [Escena, Escena2, Escena3, Escena4, Escena5, Escena6, Escena7, Escena8, Escena9, Escena10, Escena11, Escena12]
};

new Phaser.Game(config);