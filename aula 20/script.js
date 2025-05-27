let cars = ['Corolla','Uno','Brasilia','Sandeiro','Ka','Gol']
let text = "";
for(let i = 0; i < cars.length; i++) {
    text += "Carro: " + cars[i] + "<br>";
}

document.getElementById("Carro").innerHTML = text;

let i = 0
while (i < cars.length) {
    text += "carro: " + cars[i];
    i++;
}



