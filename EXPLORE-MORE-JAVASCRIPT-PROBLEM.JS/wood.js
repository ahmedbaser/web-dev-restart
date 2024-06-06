/* 
fixed: per item wood requrmints
1.chair --> 3 cft
2.table --> 10 cft
3.bed --> 50 cft

vary: quantity
 */

function woodCalculator(chairQuantity,tableQuantity,bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perbedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;


    
// console.log(chairQuantity,tableQuantity,bedQuantity)

}


const totalWood = woodCalculator(0,0,2)
console.log(totalWood);
