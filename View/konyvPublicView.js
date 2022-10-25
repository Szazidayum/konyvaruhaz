class KonyvPublicView{
    #elem
    constructor(elem, szuloElem) {
       this.#elem = elem;
        szuloElem.append(`
        <div class="cime">${elem.cim}</div>
        <div class="szerzoje">${elem.szerzo}</div>
        <div class="ara">${elem.ar}</div>
        <div class="buttonT${elem.id}"><button id="K${elem.id}">kosárba</button></div>
        `);

       this.kosarbaElem = $(`#K${elem.id}`);
       this.kosarbaElem.on("click", ()=>{
        this.kattintasTrigger("kosarba");
       });
    }

    kattintasTrigger(esemenyNeve){
        const event= new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(event);
    }
}

export default KonyvPublicView;