// Ex 1
var nomeCompleto = "Geovane"
console.log("\n" + "ex 1 \n" + nomeCompleto + "\n")

// Ex 2
var numeroA, numeroB, multiplicaçao
numeroA = 1
numeroB = 5
multiplicaçao = numeroA * numeroB
console.log("ex 2 \n" + multiplicaçao + "\n")

// Ex 3
const saudacao = () => console.log("ex 3 \n" + "Oi eu sou o Goku!" + "\n");
saudacao()

// Ex 4
const multiplica = (a, b) => console.log("ex 4 \n" + a * b + "\n")
multiplica(25, 5)



// Ex 5
const podeDirigir = (idade) => idade >= 18 ? console.log("ex 5 \n" + "Você pode dirigir" + "\n") : console.log("ex 3 \n" + "Você não pode dirigir" + "\n")

podeDirigir(18)

// // Ex 6
console.log("ex6")
for(var i = 0; i <= 20; i++)
console.log(i)
console.log("\n")



// Ex 7
console.log("ex7")
for(var j = 0; j <= 20; j++)
if(j % 2 == 0) console.log(j)
console.log("\n")

console.log("ex8")
const tabuada = (numero) => {
for(var t = 1; t <= 10; t++) 
    console.log(numero * t)
    console.log("\n")
}
tabuada(5)


const converterEmHoras = (minutos) => console.log(minutos / 60 + " horas")
converterEmHoras(40)


