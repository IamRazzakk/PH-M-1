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

    }else{
        const firstTicketPrice = 100 * first100TicketPrice
        const secoundTicketPrice = 100 * secound100TicketPrice
        const restTicketQuentity = ticekeQuentaty - 200;
        const restTicketPrice = restTicketQuentity * restAllTicketPrices
        const totalPrice = firstTicketPrice + secoundTicketPrice + restTicketPrice
        return totalPrice
    }
}
const tick = ticketPrice(200)
console.log(tick);