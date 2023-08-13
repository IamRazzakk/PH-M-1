function makeYellow(){
    document.body.style.backgroundColor = "yellow";
}

// another option what i use

const pinkButton = document.getElementById("make-pink")
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = "#FF69B4"
}

// another option
const MakeGreen = document.getElementById("make-green")
MakeGreen.addEventListener("click", function MakeMeGreen(){
    document.body.style.backgroundColor = "green"
})

// another one

document.getElementById("make-blue").addEventListener("click", function(){
    document.body.style.backgroundColor = "blue"
})