import KonyvekAdminView from "../View/konyvekAdminView.js";
import KonyvAdminModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js"

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvAdminModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        $(window).on("modosit",(event)=>{
            //console.log("controllerben módosít", event.detail);
            konyvmodel.adatModosit(event.detail);
        });
        $(window).on("torol",(event)=>{
            //console.log("controllerben töröl", event.detail);
            konyvmodel.adatTorol(event.detail);
        });
    }

    konyvAdatok(tomb) {
        //console.log(tomb);
        let szuloElem = $("main");
        //new KonyvekAdminView(tomb,szuloElem);
        new KonyvekPublicView(tomb,szuloElem);
    }
}

export default KonyvController;