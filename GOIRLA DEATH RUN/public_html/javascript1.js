//Escena principal
class Escena extends Phaser.Scene {

    preload() {
        resize();
        window.addEventListener('resize', resize);
        this.load.image('escena1', 'imatges/escena1_gorila_casa.jpg');
        this.load.audio('musicaPrincipal', 'so/Upbeat Jungle Music For Media _ Cheerful Tribal Theme.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena1');

        const zonaCamino = this.add.zone(460, 180, 150, 140);
        zonaCamino.setOrigin(0);
        zonaCamino.setName('camino');
        zonaCamino.setInteractive();
        zonaCamino.once('pointerdown', () => this.opcioPulsada(zonaCamino));

        const musica = this.sound.add('musicaPrincipal', { loop: true });
        musica.play();
    }

    opcioPulsada(opcio) {
        this.scene.start('escena2');
    }
}

// Escena 2: 3 caminos
class Escena2 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena2' });
    }

    preload() {
        this.load.image('escena2', 'imatges/escena2_gorila_3caminos.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'escena2');

        const izquierda = this.add.zone(70, 350, 150, 150).setOrigin(0).setName('izq').setInteractive();
        const centro = this.add.zone(350, 200, 150, 150).setOrigin(0).setName('centro').setInteractive();
        const derecha = this.add.zone(620, 310, 150, 150).setOrigin(0).setName('der').setInteractive();

        izquierda.once('pointerdown', () => this.scene.start('escena3'));
        centro.once('pointerdown', () => this.scene.start('escena5'));
        derecha.once('pointerdown', () => this.scene.start('escena4'));
    }
}

// Escena 3: Jaguar (final)
class Escena3 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena3' });
    }

    preload() {
        this.load.image('escena3', 'imatges/escena3_jaguar.jpg');
        this.load.audio('sonido_muerte', 'so/Roblox Death Sound - OOF _ Sound Effect HD - HomeMadeSoundEffects.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena3');
        this.sound.play('sonido_muerte');
    }
}

// Escena 4: Árbol (final)
class Escena4 extends Phaser.Scene {
    constructor() {
        super({ key: 'escena4' });
    }

    preload() {
        this.load.image('escena4', 'imatges/escena4_arbol.jpg');
        this.load.audio('sonido_muerte', 'so/Roblox Death Sound - OOF _ Sound Effect HD - HomeMadeSoundEffects.mp3');
    }

    create() {
        this.add.sprite(480, 320, 'escena4');
        this.sound.play('sonido_muerte');
    }
}