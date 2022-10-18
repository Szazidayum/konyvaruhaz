//egyetlen egy könyv, div-ben, h és p tagekkel, kosárban gomb

class KonyvPublicView{
    #elem
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
       //console.log(elem);
       this.#elem = elem;
       {/* <div class="idja">${elem.id}</div> */}
        szuloElem.append(`<div class="divKonyv"><tr>
        <div class="cime">${elem.cim}</div>
        <div class="szerzoje">${elem.szerzo}</div>
        <div class="ara">${elem.ar}</div>
        <div class="buttonM${elem.id}"><button id="M${elem.id}">módosítás</button></div>
        <div class="buttonT${elem.id}"><button id="T${elem.id}">törlés</button></div>
        </tr></div>`);
       //Az objektum egyes html elemeinek az elnevezése
       this.recordElem = szuloElem.children("tr:last-child");
       
       //gombokat elnevezzük
       this.modositElem = $(`#M${elem.id}`);
       this.torolElem = $(`#T${elem.id}`);
       
       /* console.log(this.modositElem);
       console.log(this.recordElem); */
       //gombokhoz click esemény
       this.modositElem.on("click", ()=>{
        /* console.log("modosít a viewban"); */
        this.kattintasTrigger("modosit");
       });
       this.torolElem.on("click", ()=>{
        /* console.log("torol a viewban"); */
        this.kattintasTrigger("torol");
       });
    }

    //Létrehozunk egy saját eseményt
    kattintasTrigger(esemenyNeve){
        /* console.log(esemenyNeve," view-ban"); */
        const event= new CustomEvent(esemenyNeve,{detail:this.#elem.id})
        window.dispatchEvent(event);
    }
}

export default KonyvPublicView;