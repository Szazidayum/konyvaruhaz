class KosarView{
    constructor(tomb, szulotomb){
        szulotomb.html("");
        for (let i = 0; i < tomb.length; i++) {
            szulotomb.append(`
        <div class="cime">${tomb[i].cim}</div>
        <div class="szerzoje">${tomb[i].szerzo}</div>
        <div class="ara">${tomb[i].ar}</div>
        <div class="buttonT${tomb[i].id}"><button id="T${tomb[i].id}">törlés</button></div>
        `);
        this.kosarbolTorol = $(`#T${tomb[i].id}`);
        this.kosarbolTorol.on("click", ()=>{
            console.log("törlömöm:"+this.kosarbolTorol);
            //tömbből törlés
        });
        }
    }
}
export default KosarView;