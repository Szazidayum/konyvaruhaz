//listázzuk a könyveket div-ekben
import KonyvPublicView from "./konyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        console.log("public");
        szuloElem.append(`<table><thead><tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr></thead><tbody></tbody></table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");

        tomb.forEach(konyv => {
            const konyvObj = new KonyvPublicView(konyv, this.tablaElem);
            this.konyvMegjelenit(konyvObj);
        });
    }

    konyvMegjelenit(elem){
            //console.log(elem);
       
        
    }
}

export default KonyvekPublicView;