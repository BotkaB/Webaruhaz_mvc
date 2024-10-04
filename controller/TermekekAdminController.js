import AdminTermekekTablazat from "../view/AdminTermekekTablazat.js";
import TermekModel from "../model/TermekModel.js";

export default class TermekekAdminController {


    constructor() {

        this.tModel = new TermekModel();
        const lista = this.tModel.getLista();

        this.tTabla = new AdminTermekekTablazat(lista, $(".admin"))
        this.torlesEsemeny()
    }

    torlesEsemeny() {
        $(window).on("torles", (event) => {
           // let index = event.detail.id
           let id=event.detail.id
            this.tModel.torles(id)
            const lista = this.tModel.getLista()
            this.tMegjelenit = new AdminTermekekTablazat(lista, $(".admin"))

        })
    }
}