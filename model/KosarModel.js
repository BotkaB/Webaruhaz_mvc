export default class KosarModel {

    #kosarLista = [];

    constructor() {

    }
    /*
        kosarbaRak(termek) {
            this.#kosarLista.push(termek)
            console.log(termek)
        }
    
    */

    kosarbaRak(termek) {
        let nincs = true;
        for (let i = 0; i < this.#kosarLista.length; i++) {
            if (this.#kosarLista[i].id === termek.id) {
                this.#kosarLista[i].mennyiseg++;
                nincs = false;
            }
        }
        if (nincs) {
            this.#kosarLista.push({ ...termek, mennyiseg: 1 });
        }
        console.log( this.#kosarLista)

    }

}