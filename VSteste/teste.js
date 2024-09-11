// function classificarNota(){
//     const nota = parseInt(prompt(' Digite a nota do Aluno(0 a 100):'));
// let resultado;
// if (nota> 90){
//     resultado = ' A. Excelente Trabalho!';
// } else if (nota >= 80){
//     resultado = 'B. Bom Trabalho';
// } else if (nota >= 70){
//     resultado = 'C. Trabalho Satisfatório';
// } else if (nota >= 60){
//     resultado = 'D.Precisa Melhorar'
// } else{
//     resultado = ' F.Insuficiente.';
// }

// alert(`Sua Nota é ${resultado}`);

// }

// classificarNota();


// function DigitarNota(){
//     const nota = parseInt(prompt('digite a nota(0 a 100):'));
//     const intervaloA = parseInt(prompt(' 0<=40 '));
//     const intervaloB = parseInt(prompt(' 40 >=70'));
//     const intervaloC = parseInt(prompt('70>=100 '));
// let resultado;
// if (nota <40){
//     resultado = ' Sua nota é C'
// } else if ( nota >40 && nota <=70){
//     resultado = 'sua nota é B'
// }
// else {( nota > 70 && nota <=100)
//     resultado = 'sua nota é A'
// }

// alert (`sua nota é ${resultado}`)
// }

// DigitarNota();


// function DigitarNota (){
//     const nota = parseInt(prompt('digite a nota(0 a 100):'));
// let resultado; 
// if (nota <=100){
//  alert (`sua nota é válida${resultado}`)   
// }
// else {(nota> 100)}
//  alert (`sua nota é invalida${resultado}`)

// }
// DigigitarNota();

// function DigitarNota(){
//     const nota = parseInt(prompt('Digite a nota(0 a 100):'))
//     let resultado;
//     if (nota < 60){
//         resultado = 'Você esta reprovado'
//     }
//     else if (nota >=60 && nota<=100){
//         resultado = ' voce passou da media'
//     }
//     else{
//         resultado = 'sem nota'
//     }
// alert (`${resultado}`)


// }
// DigitarNota();


// function DigitarNota(){
//     const nota = parseInt(prompt('Digite a nota(0 a 100):'))
//     let resultado;
//     if (nota <60){
//         resultado = 'precisa melhorar'
//     }
//     else if ( nota >60 && nota<=80 ){
//         resultado = 'muito bem. pode melhorar'
//     }
//     else if ( nota>80 && nota <=100){
//         resultado = 'excelente. você está bem'
//     }
//     else {
//         resultado = 'sem nota'
//     }

// alert (`sua nota é ${nota} e ${resultado}`)

// }
// DigitarNota();


// function ClassificarNota(){
//     const nota = parseInt(prompt('Digite a nota(0 a 100:'))
//     const comentario = (prompt('comentario'))
//     let resultado;
//     if (nota < 60){
//         resultado = 'nota B.precisa melhorar'
//     }    
//     else if (nota >60 && nota<=80 ){
//         resultado = 'nota A .Mas pode melhorar'
//     }
//     else if (nota > 80 && nota <=100){
//         resultado = ' excelente.continue assim'
//     }
//     else{
//         resultado = ' sem nota'
//     }
//     alert(`sua nota é ${resultado} e ${comentario}}`)

//     }

// ClassificarNota();


// function DigitarNotaNota(){
//     const nota = parseInt(prompt('Digite a nota(0 a 100:'));
//     const FaixaNotaA = parseInt(prompt('0 a 50'))
//     const FaixaNotaB = parseInt(prompt( ' 50 a 70'))
//     const FaixaNotaC = parseInt (prompt('70 a 100' ))
// let resultado;
// if (nota>0 && nota <=50){
//     resultado = 'A'
// }   
// else if (nota >)

}





// const numeros = [1,2,3,4,5,6]
// numeros.unshift(77)// jogar numero no meio
// console.log(numeros)

 //  
 // numeros.splice(2,2,'Valnei')// primeiro numero e a posiçao. segundo a quantidade. 3 local
 // console.log(numeros)

// const numeros = [1,2,3,4,5]
// numeros.push(999)// joga pro final
// console.log(numeros)

//  const numeros = [1,2,3,4,5]
// console.log(numeros.indexOf(2))// Busca se existe

// const numeros = [' Valnei','mohamed', 'sergio','mohamed','batista']
// console.log(numeros.lastIndexOf('mohamed'))// Buscar no indice a ultima vez add


// const numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
// console.log(numeros.includes('Valnei')) // Verificar se existe


// const numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
// const ultimo= numeros.pop()
// console.log(ultimo)
// console.log(numeros) // retira do indice

// const numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
// const primeiro = numeros.shift()
// console.log(primeiro)
// console.log(numeros)


 // const numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
 // const meio = numeros.splice(2,1)
 // console.log(meio)
 // console.log(numeros) // remover a posição no indice, quantidade no indice


// let numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
// numeros=[]
// console.log(numeros)// esvaziar um array


// let numeros = ['Valnei','mohamed', 'sergio','mohamed','batista']
// numeros.length=0
// console.log(numeros)// esvaziar um array






// let frutas = ['maça', 'banana','laranja']
// frutas.unshift = ('abacaxi')
// console.log(frutas)

// let frutas = ['maçã','banana','laranja' ]
// frutas.unshift = ('manga')
// console.log(frutas)

// let frutas = ['maçã','banana','laranja']
// let ultimo = frutas.pop()
// console.log('maçã')
// console.log(frutas)

 // const frutas = ['maça', 'banana','laranja']
 // const meio = frutas.splice [2,1]
 // console.log(meio)
 // console.log(frutas)


// let numeros = [10,20,30,40,50]
// let meio = numeros.splice(2,0,25)
// console.log(meio)
// console.log(numeros)


// let numeros = [10,20,30,40,50]
// let numero = numeros.splice(3,1)
// console.log(numeros)



 // let cores = ['vermelho','azul','verde','amarelo','azul']
 // console.log(cores.indexOf(0))

  //let cores = ['vermelho','azul','verde','amarelo','azul']
  // console.log(cores.lastIndexOf('azul'))
 
 // let cores = ['vermelho','azul','verde','amarelo','azul']
 // console.log(cores.includes('roxo'))



//  let alunos =['João','Ana', 'Carlos','Bia']
//  let meio = alunos.splice(2,1)
//  console.log(meio)
//  console.log(alunos)



// let animais = ['gato','cachorro','pássaro','peixe','gato']
// let meio = animais.splice(0,1)
// console.log(meio)
// console.log(animais)

// let animais = ['gato','cachorro','pássaro','peixe','gato']
// animais.push('hamster')
// console.log(animais)

// let animais = ['gato','cachorro','pássaro','peixe','gato']
// let meio = animais.splice(2,1)
// console.log(meio)
// console.log(animais)

// let animais = ['gato','cachorro','pássaro','peixe','gato']
// console.log(animais.includes('gato'))



// let livros = ['O Senhor Dos Anéis','1984','O Pequeno Príncipe','Harry Potter']
// console.log(livros.lastIndexOf('1984'))

// let livros = ['O Senhor Dos Anéis','1984','O Pequeno Príncipe','Harry Potter']
// let meio = livros.splice(2,1)
// console.log(meio)
// console.log(livros)

// let livros = ['O Senhor Dos Anéis','1984','O Pequeno Príncipe','Harry Potter']
// let primeiro = numeros.shift()
//  console.log(primeiro)
//  console.log(livros)



// let cidades = ['São Paulo','Rio de Janeiro','Salvador','Brasília']
// console.log(cidades.includes('Salvador'))

// let cidades = ['São Paulo','Rio de Janeiro','Salvador','Brasília']
// cidades.unshift('curitiba')
// console.log(cidades)




// let jogos = ['FIFA','Minecraft','Fortnite','Among Us']
// let meio = numeros.splice(1,1)
// jogos.unshift('The Sims')
// console.log(meio)
// console.log(jogos) 



// let jogos = ['FIFA','Minecraft','Fortnite','Among Us']
// let primeiro = jogos.shift('FIFA')
// console.log(primeiro)
// console.log(jogos)



// let esportes = ['futebol','basquete','vôlei','tênis']
// let primeiro = jogos.shift('futebol')
// console.log(primeiro)
// console.log(esportes)

// let esportes = ['futebol','basquete','vôlei','tênis']
// console.log(esportes.includes('vôlei'))

// let esportes = ['futebol','basquete','vôlei','tênis']
// let meio = esportes.splice(2,1)
// console.log(meio)
// console.log(esportes)




// let tecnologias = ['HTML','CSS','Javascript','React']
// let ultimo = tecnologias.pop()
// console.log('React')
// console.log(tecnologias)


// let tecnologias = ['HTML','CSS','Javascript','React']
// cidades.unshift('Node.js')
// console.log(tecnologias)

// let tecnologias = ['HTML','CSS','Javascript','React']
// console.log(tecnologias.lastIndexOf('Javascript'))




// let cores = ['vermelho','azul','verde','amarelo']
// let meio = cores.splice(2,1)
// console.log(meio)
// console.log(cores)

// let cores = ['vermelho','azul','verde','amarelo']



// Atividade 03

let frutas = ['maçã','banana','laranja']
frutas.push('Uva')
let primeiro = frutas.shift('maçã')
console.log(frutas)
console.log(primeiro)

let VerificarFruta = ['maçã','banana','laranja']
console.log(VerificarFruta.includes('banana'))
if (VerificarFruta='banana'){
    console.log('Fruta Encontrada')
}
else ('Fruta não encontrada')
console.log(VerificarFruta)



let a = 5
let b = 4
let resultado = a * b
console.log('O resultado da multiplicação é:' + resultado)

let a = 5
let b = 4
if (a+b = 9){
    console.log('correto')
}
else if(a*b = 20){
    console.log('correto')
}
else('errado')


let a = 10
let b = 2
let resultado = a + b
console.log('o resultado da soma é' + resultado)

let a = 10
let b = 2
let resultado = a/b
console.log('o resultado da divisão é' + resultado)





let numeros = [1,2,3,4,5]
for(let numeros>0; numeros.lenght; count++5)



function ClassificarNota ()
switch ClassificarNota{
    case ClassificarNota > 7
    console.log('Aprovado');
    break
    case ClassificarNota < 7
    console.log('Reprovado')
}
console.log(ClassificarNota = 8)


// let numeros = [5, 10, 1, 20]// num 5
// function verificarNumero(){
// if (0<10)
//     return('Menor que 10')
// else if (10>=20)
//     return('Entre 10 e 20')
// else (0>20)
//     return('Maior que 20')
// }
// console.log((verificarNumero,5))



// let idade = 30 // Num 6

// if (idade>=18 && idade<65){
// console.log('Adulto')
// }
// else{('Não Adulto')
// }


// let idade = 30
// let tipo= (idade>=18 && idade<=65)?'Adulto':'Não Adulto'
// console.log(tipo)


// function fizzBuzz[]// nume 7






// let tarefas = ['Estudar','Limpar','Comprar'];// Num 8
// tarefas.splice(2,0,'exercitar');
// console.log(tarefas)


// let tarefas = ['Estudar','Limpar','Comprar'];
// let tamanho = array.length;
// console.log('O tamanho do Array é': +tamanho);


















let valores = [5,10,15, 20]
let valoresDivididos= []
let i = 0
while(i<valores.length){
    valoresDivididos.push(valores{i}/2)
    i++
}
console.log(valores(valoresDivididos))


