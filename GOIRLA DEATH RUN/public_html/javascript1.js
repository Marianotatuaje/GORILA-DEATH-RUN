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
