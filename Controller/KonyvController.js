import KonyvekView from "../View/konyvekAdinView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();
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
        let szuloelem = $("main");
        new KonyvekView(tomb,szuloelem);
    }
}

export default KonyvController;