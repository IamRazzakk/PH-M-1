function ticketPrice(ticekeQuentaty) {
    const first100TicketPrice = 100;
    const secound100TicketPrice = 90;
    const restAllTicketPrices = 70;
    if (ticekeQuentaty <= 100) {
        const price = ticekeQuentaty * first100TicketPrice
        return price
    } else if (ticekeQuentaty <= 200) {
        const firstTicketPrice = 100 * first100TicketPrice;
        const restTicketQuentity = ticekeQuentaty - 100;
        const restTicketPrice = secound100TicketPrice * restTicketQuentity
        const totalPrice = firstTicketPrice + restTicketPrice
        return totalPrice

    } else {
        const firstTicketPrice = 100 * first100TicketPrice
        const secoundTicketPrice = 100 * secound100TicketPrice
        const restTicketQuentity = ticekeQuentaty - 200;
        const restTicketPrice = restTicketQuentity * restAllTicketPrices
        const totalPrice = firstTicketPrice + secoundTicketPrice + restTicketPrice
        return totalPrice
    }
}
const tick = ticketPrice(200)
// console.log(tick);


// feet to inch and have an conditation use feetToInch
// centimitar to mitar centimitarToMeter 
// 
// function feetToInch(inch) {
// const TotalInch = inch / 12
// return TotalInch
// }
// const rakibInch = feetToInch(64.8)
// console.log(rakibFeet);

// function inchToFeet(feet) {
//     const feets = feet * 12
//     return feets
// }
// const rakibFeet = inchToFeet(5.4)
// console.log(rakibFeet);


// function centimetertoMeter(meter){
// const meters = meter / 100
// return meters
// }
// const centemeter = centimetertoMeter(1000)
// console.log(centemeter);

// friend = ['sajid', 'mamun', 'kamal', 'jubayer bin rashid', 'chinku']
// function bestFriend(name) {
//     let longname = name[0];
//     for (let i = 0; i < name.length; i++) {
//         if(name[i].length > longname.length){
//             longname = name[i]
//         }
//     }
//     return longname
// }
// const friendList = bestFriend(friend)
// console.log(friendList);

// countpaper book1-- - .100 book2-- -> 200 book3-- -> 300 paperReqirnment
// function requerMent(book1, book2, book3) {

// }
// const bookPage = requerMent(100, 200, 300)
// console.log(bookPage);


// function onlyPositive(number) {
//     let pNumber = []
//     for (i = 0; i < number.length; i++) {
//         if (number[i] >= 0) {
//             pNumber.push(number[i])
//         } else {
//             break;
//         }
//     }
//     return pNumber
    
// }
// const number = [45, 87, 96, 11, 63, -56, 71, 28]
// const positiveNumber = onlyPositive(number)
// console.log(positiveNumber);

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
console.log(sum);
}