export default class AdminSor {
    #termek = {};

    constructor(termek, szuloElem) {
        this.#termek = termek;
        this.szuloElem = szuloElem;
        this.sorKiir();
        this.kukaElem = $(".torol:last");
        this.kattintasEsemeny();
    }

    kattintasEsemeny() {
        this.kukaElem.on("click", () => {
            const e = new CustomEvent("torles", { detail: this.#termek })
            window.dispatchEvent(e)
        })
    }


    sorKiir() {
        this.szuloElem.append(
            ` <tr>
    <td>${this.#termek.id}</td>
    <td>${this.#termek.title}</td>
    <td>${this.#termek.price}</td>
    <td>${this.#termek.description}</td>
    <td>${this.#termek.category}</td>
    <td><img class=adminKep src="${this.#termek.image}" alt=${this.#termek.title} max-width: 100%;></td>
    <td>${this.#termek.rating.rate}</td>
    <td>${this.#termek.rating.count}</td>

    <td class="torol">🗑️</td>
    
    </tr>`)

    }
}