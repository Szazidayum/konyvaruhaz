import KonyvekPublicView from "../View/KonyvekPublicView.js"
import KonyvekAdminView from "../View/KonyvekAdminView.js"
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        const konyvModel = new KonyvModel();
        $("#public").on("click", () =>{
            konyvModel.adatBe("../adat.json", this.konyvPublicAdatok);
        })
        $("#admin").on("click", () =>{
            konyvModel.adatBe("../adat.json", this.konyvAdminAdatok);
        })
        
        
        $(window).on("modosit",(event)=>{
            //console.log("controllerben módosít", event.detail);
            konyvModel.adatModosit(event.detail);
        });
        $(window).on("torol",(event)=>{
            //console.log("controllerben töröl", event.detail);
            konyvModel.adatTorol(event.detail);
        });
        
    }

    konyvAdminAdatok(tomb) {
        let szuloElem = $(".konyvekAdminLista");
        new KonyvekAdminView(tomb,szuloElem);
    }
    konyvPublicAdatok(tomb) {
        let szuloElem = $(".konyvekPublicLista");
        new KonyvekPublicView(tomb,szuloElem);
    }
}

export default KonyvController;