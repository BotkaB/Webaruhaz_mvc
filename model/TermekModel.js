import { termekLista } from "./TermekAdatok.js";

export default class TermekModel {

    #lista = [];

    constructor() {
        this.#lista = termekLista;
    }

    getLista() {
        return this.#lista
    }

    getElem(id) {
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];

            if (element.id === id) {
                return element
            }
        }


    }

    torles(id) {
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];

            if (element.id === id) {
                this.#lista.splice(index, 1)
            }
        }

    }

}