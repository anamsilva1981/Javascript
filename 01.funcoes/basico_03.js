//  Arrow Funcrtion

// Sintaxe tradiciona
// function soma(a, b){
//     return a + b
// }

// Arrow function equivalente 
// const soma = (a, b) => a + b;


// Exercicio de Arrow Functions:
// 1. Escreva uma arrow function chamada 'dobro' que recebe um numero como argumento e retorna o dobro deste numero.
const dobro = (a) => a * 2;
console.log(dobro(2))


// 2. Crie uma arrow function chamada saudacao que recebe um numero como argumento e retorna uma string de saudacao por exemplo: 'ola[nome]'
const saudacao = nome => `Ola ${nome}`
console.log(saudacao('Rita'))


// 3. Implemente uma arrow function chamada ehPar que recebe um numero e retorna true se o numero for par e false se o numero for impar 
const ehPar = number => number%2;
    if(number%2){ console.log('eh par')}else{console.log('eh impar')}
console.log(ehPar(35))