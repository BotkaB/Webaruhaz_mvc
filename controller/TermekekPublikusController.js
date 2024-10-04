import PublikusTermekek from "../view/PublikusTermekek.js";
import { termekLista } from "../model/TermekAdatok.js";
import Kartya from "../view/Kartya.js";
import TermekModel from "../model/TermekModel.js";
import KosarModel from "../model/KosarModel.js";

export default class TermekekPublikusController {


    constructor() {

       
        this.tmodel = new TermekModel();
        this.kmodel=new KosarModel();
        this.lista = this.tmodel.getLista();
        this.ttermekek = new PublikusTermekek(this.lista, $(".fooldal"));

        this.kosarbaTesz();
    }

    kosarbaTesz() {
        $(window).on("kosarbatesz", (event) =>{
            let id = event.detail
            let termek=this.tmodel.getElem(id)
            this.kmodel.kosarbaRak(termek)
        

    })
}
}