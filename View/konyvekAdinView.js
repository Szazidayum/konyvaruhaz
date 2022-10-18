import KonyvView from "./konyvAdminView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><thead><tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr></thead><tbody></tbody></table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");

        tomb.forEach(konyv => {
            const konyvObj = new KonyvView(konyv, this.tablaElem);
            this.konyvMegjelenit(konyvObj);
        });
    }

    konyvMegjelenit(elem){
            //console.log(elem);
       
        
    }
}

export default KonyvekView;