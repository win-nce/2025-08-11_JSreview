let a = 0
const b = ""

//  // Повторение циклов
// let c = ["1", 2, "3", 5, 6, 7]

// for(let i = 0; i < c.length; i++){
//     document.write(i)
// }

// for (const i of c) {
//     document.write(i)
// }

// let d = 0
// while(d <= 10){
//     document.write(d++)
// }

// ------------------------------------  

let user = prompt("Выберите вариант\n1 - black \n2 - red")
if(user == 1){
    document.body.style.background = 'black'
}
else if (user == 2){
    document.body.style.background = 'red'
}
else{
    alert("нужно выбрать один из вариантов.")
}

// ------------------------------------


// function setText(text) {
//     document.body.textContent = text
// }

// setText("React")


// let cnt = document.querySelector(".box")

// let elem = document.createElement("h1")
// elem.textContent = "React JS"
// cnt.appendChild(elem)

fetch('https://www.themealdb.com/meal/53079-fish-soup-(ukha)-recipe')
    .then(response => response.json())
    .then(json => console.log(json))