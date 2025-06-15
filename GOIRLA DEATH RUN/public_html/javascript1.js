// Escena 5: 2 caminos
class Escena5 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena5' });
    }

    preload() {
        this.load.image('escena5', 'imatges/escena5_2caminos.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'escena5');

        const izq = this.add.zone(250, 250, 120, 150).setOrigin(0).setInteractive();
        const der = this.add.zone(530, 250, 120, 150).setOrigin(0).setInteractive();

        izq.once('pointerdown', () => this.scene.start('escena6'));
        der.once('pointerdown', () => this.scene.start('escena7'));
    }
}

// Escena 6: Humanos (final)
class Escena6 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena6' });
    }

    preload() {
        this.load.image('escena6', 'imatges/escena6_humanos.jpg');
        this.load.audio('sonido_muerte', 'so/Roblox Death Sound - OOF _ Sound Effect HD - HomeMadeSoundEffects.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena6');
        this.sound.play('sonido_muerte');
    }
}

// Escena 7: Entrada templo
class Escena7 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena7' });
    }

    preload() {
        this.load.image('escena7', 'imatges/escena7_templo.jpg');
        this.load.audio('musica_templo', 'so/Dark Jungle Music - Aztec Temple.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena7');

        this.sound.stopAll();
        this.sound.add('musica_templo', { loop: true }).play();

        const puerta = this.add.zone(410, 300, 160, 220).setOrigin(0).setInteractive();
        puerta.once('pointerdown', () => this.scene.start('escena8'));
    }
}

// Escena 8: Templo 3 caminos
class Escena8 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena8' });
    }

    preload() {
        this.load.image('escena8', 'imatges/escena8_templo3.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'escena8');

        const izq = this.add.zone(100, 240, 120, 160).setOrigin(0).setInteractive();
        const centro = this.add.zone(340, 140, 120, 160).setOrigin(0).setInteractive();
        const der = this.add.zone(600, 240, 120, 160).setOrigin(0).setInteractive();

        izq.once('pointerdown', () => this.scene.start('escena9'));
        centro.once('pointerdown', () => this.scene.start('escena10'));
        der.once('pointerdown', () => this.scene.start('escena11'));
    }
}