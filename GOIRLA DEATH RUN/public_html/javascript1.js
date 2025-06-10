//Escena inicial
class Escena extends Phaser.Scene {

    //Càrrega de recursos
    preload() {
        
        this.load.image('Escena1', 'imatges/Escena1.png');
        
    } 
    
     create() {
        /*
         * Mitjançant el mètode this.add.sprite col.locam la imatge en pantalla:
         *  - Primer paràmetre: Valor de la coordenada X on col.locarem el centre de la imatge passada com a tercer paràmetre. En el nostre cas el valor és 480 (960/2).
         *  - Segon paràmetre: Valor de la coordenada y on col.locarem el centre de la imatge passada com a tercer paràmetre. En el nostre cas el valor és 320 (640/2).
         *  - Tercer paràmetre: Nom de la imatge que volem col.locar i que hem definit prevaiment en el mètode preload(). En el nostre cas és la imatge "fons".
         *En el nostre cas, el valor que hem donat a les coordenades és la meitad del valor de l'amplada i alçada de CANVAS, això ens situa l'imatge al centre
         *de la pantalla.
         */
        this.add.sprite(480, 320, 'Escena1');