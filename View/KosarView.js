class KosarView{
    constructor(tomb, szulotomb){
        for (let i = 0; i < tomb.length; i++) {
            szulotomb.append(`
        <div class="cime">${tomb[0].cim}</div>
        <div class="szerzoje">${tomb[0].szerzo}</div>
        <div class="ara">${tomb[0].ar}</div>
        `);
            
        }
        
        // console.log(tomb[0]);
    }
}
export default KosarView;