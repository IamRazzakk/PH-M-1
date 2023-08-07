var phone = [
    { name: "samsung", camera: 12, Storage: "250GB", Price: 56000, color: "silver" },
    { name: "Walton", camera: 12, Storage: "250GB", Price: 12000, color: "silver" },
    { name: "Oppo", camera: 12, Storage: "250GB", Price: 25000, color: "silver" },
    { name: "redmi", camera: 12, Storage: "250GB", Price: 25000, color: "silver" },
    { name: "xiomi", camera: 12, Storage: "250GB", Price: 26000, color: "silver" },
    { name: "Iphone", camera: 12, Storage: "250GB", Price: 82000, color: "silver" },
    { name: "Lenevo", camera: 12, Storage: "250GB", Price: 12000, color: "silver" }
]
function bayAPhone(phones) {

    for (let i = 0; i < phone.length; i++) {
        var chePast = phones[0];
        const element = phones[i];
        if (element.Price < chePast.Price) {
            chePast = element
        }

    }
return chePast
}
const myCollection = bayAPhone(phone)
console.log(myCollection);