// function removeDuplicateName(name){
//     var unique =[]
//     for (let i = 0; i < name.length; i++) {
//         const element = name[i];
//         if(unique.includes(name)!== true){
//             unique.push(name)
//         }
//     }
//     return unique

// }
// const names = ['abdul','babul','dabul','tabult','cabul','dabul','tabul']
// const student = removeDuplicateName(names)
// console.log(student);

for(i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("foobar");
    }else if(i % 3 === 0){
        console.log("foo");
    }
    else if(i % 5 === 0){
        console.log("bar");
    }else{
        console.log(i);
    }
}