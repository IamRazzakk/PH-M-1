let product = [
    { name: "shirt", price: 1200 },
    { name: "pent", price: 1400 },
    { name: "belt", price: 200 },
    { name: "perpume", price: 800 },
    { name: "undergarments", price: 500 },
]
function getbuy(products) {
    let sum = 0;
    for(i = 0; i<products.length; i++){
        const product = products[i]
        sum += product.price
    }
    return sum
}
const produc = getbuy(product)
console.log(produc);