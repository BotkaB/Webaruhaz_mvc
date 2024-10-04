export default class Kartya {
    #kartya;
    #szuloElem;

    constructor(kartya, szuloElem) {
        this.#kartya = kartya;
        this.#szuloElem = szuloElem
        this.#kartyaKeszit();

        this.kosarElem = $(".kosar:last");

        this.#kosarbaTeszKattintasEsemeny();

    }



    #kosarbaTeszKattintasEsemeny() {
        this.kosarElem.on("click", () => {
            const e = new CustomEvent("kosarbatesz", { detail: this.#kartya.id })
            window.dispatchEvent(e)
            

        })
    }

    #kartyaKeszit() {
        this.#szuloElem.append(`
   
        <div  class="card" " style="max-width: 33rem">
        <h5 class="card-header"   >${this.#kartya.title}</h5>
        <div class="card-body" >
        <img src="${this.#kartya.image}"   style="max-height:100px; width:max-content;"  alt="termek[i].title" >
        <!--p class="card-text">${this.#kartya.description}</p-->
        </div>
        <div class="card-footer">
        <h2 class="card-text">Ár: ${this.#kartya.price}</h2>
      
        <a class="btn btn-primary kosar">Kosárba tesz</a>
        </div>
        </div>
       
    `);

    }

}