// function woodCalculator(chairQuantity, tableQuantity, badQuantity){
//     const parChairwood = 3;
//     const parTablewood = 10;
//     const parBadWood = 50;
//     const parChairTotalWood = chairQuantity * parChairwood
//     const parTableTotalWood = tableQuantity * parTablewood
//     const parBadTotalWood = badQuantity * parBadWood
//     const totalWood = parChairTotalWood + parTableTotalWood + parBadTotalWood
//     return totalWood
// }
// const wood = woodCalculator(10,1,7)
// console.log(wood);
function woodNeed(chairQuantity, tableQuantity, badQuantity){
const parChairWood = 3;
const parTableWood = 10;
const parBadWood = 50;
const totalWoodForChair = chairQuantity * parChairWood
const totalWoodForTable = tableQuantity * parTableWood
const totalWoodForBad = badQuantity * parBadWood
const TotalFurnitureWood = totalWoodForChair + totalWoodForTable + totalWoodForBad
return TotalFurnitureWood
}
const totalWood = woodNeed(0,0,1)
console.log(totalWood);