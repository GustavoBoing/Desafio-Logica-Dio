//console.log("ola mundo")

let lin = 0, col = 0
let heroi = 
[
    ["Gustavo", 600],
    ["Jean", 1200],
    ["Eduardo", 2200],
    ["claudio", 10500],
    ["ze", 5500],
    ["Lucio", 5500],
    ["giba", 8500],
    ["leo", 9500]
]

    for(lin = 0; lin < 8; lin++){
        for(col = 0; col < 1; col++){
            if(heroi[lin][1] < 1000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Ferro");
            } else if(heroi[lin][1] >= 1001 && heroi[lin][1] < 2000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Bronze");
            } else if(heroi[lin][1] >= 2001 && heroi[lin][1] < 5000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Prata");
            } else if(heroi[lin][1] >= 5001 && heroi[lin][1] < 7000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Ouro");
            } else if(heroi[lin][1] >= 7001 && heroi[lin][1] < 8000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Platina");
            } else if(heroi[lin][1] >= 8001 && heroi[lin][1] < 9000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Ascendente");
            } else if(heroi[lin][1] >= 9001 && heroi[lin][1] < 10000){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Imortal");
            } else if(heroi[lin][1] >= 10001){
                console.log("O heroi " + heroi[lin][0] + " é do nível: ")
                console.log("Radiante");
            }
        }
    }
