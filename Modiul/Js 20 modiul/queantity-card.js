let product = [
    { name: "shirt", price: 1200, quantity: 2},
    { name: "pent", price: 1400 , quantity: 4},
    { name: "belt", price: 200, quantity: 3 },
    { name: "perpume", price: 800,quantity: 5 },
    { name: "undergarments", price: 500, quantity: 1 },
]
function getbuy(products) {
    let sum = 0;
    for(i = 0; i<products.length; i++){
        const product = products[i]
        const productTotalPrice = product.price * product.quantity;
        sum += productTotalPrice
    }
    return sum
}
const produc = getbuy(product)
console.log(produc);