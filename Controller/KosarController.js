import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";

class KosarController{
    constructor(){
        const kosarModel = new KosarModel();
        const kosarTartalom = kosarModel.getKosarTomb();
        $(".kosarButton").on("click", ()=>{
                console.log(kosarTartalom);
                this.kosarAdatok(kosarTartalom);
        });
        $(window).on("kosarba",(event)=>{
            console.log("controllerben kosárba helyez", event.detail);
            kosarModel.adatKosarba(event.detail);
        });
    }
    kosarAdatok(tomb){
        let szuloElem = $(".kosaram");
        new KosarView(tomb,szuloElem);
    }
}

export default KosarController;