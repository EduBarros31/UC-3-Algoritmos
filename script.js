// Atividade dia 08


let frutas = ["Maçã", "Banana", "Laranja"]
frutas.push("Manga");
frutas.unshift("Uva")
frutas.pop()

console.log(frutas)



let saudacao = "Olá"
let nome = "Maria"

let frase = `${Olá}${Maria}`
console.log(frase)




let numero = 10
if (numero % 2 ===0){
    console.log("Par");
} else {
    console.log("Impar");
}



let numeros = [5, 12, 8, 130, 44]
let filtrados = numeros.filter(function(num){
    return num > 10;
})

console.log(filtrados)




let valores = [10, 20, 30, 40];
let soma = valores.reduce((acc,valorAtual) => acc + valorAtual, 0);

console.log(soma)



let texto = "javascript é legal"
let textoMaiusculo = texto.toUpperCase();

console.log(textoMaiusculo);



let nome = "Carlos"
let contemLetraA = nome.includes("a");

console.log(contemLetraA)




let cores = ["Azul", "Verde", "Amarelo", "Roxo"];
cores.splice(1,2);

console.log(cores)





let numeros = [10, 20, 30];
numeros.unshift("5")
numeros.push("40")

console.log(numeros)




let frase = "Programação é divertida"
console.log(frase.length);




let frase = "Aprender JavaScript é muito bom"
let palavras = frase.split(" ");

console.log(palavras)



let texto = "Eu gosto de JavaScript"
texto.reverse();

console.log(texto);



let numeros = [1, 2, 3, 4, 5]
let dobrados = numeros.map(function(num){
 return num * 2   
})
console.log(dobrados);



let numerosAleatorios= [];
let filtrados= [];

for(i = 0; i < 100; i++){
    let numero = Math.floor(Math.random()*101 )+1;
    numerosAleatorios.push(numero);
    if (numero > 50){

    }

    }
console.log(numerosAleatorios)
console.log(filtrados)




let numerosAleatorios = []
let soma = 









 let frase = "O clima está ensolarado"
 let novoTexto = frase.replace("ensolarado", "chuvoso");
 
 console.log(novoTexto);




let numeros = [40, 10, 30, 20, 50]
let ordemCrescente 
numeros.sort();



