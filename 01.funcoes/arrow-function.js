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
const ehPar = number => number % 2 === 0;
const numero = 35;

if (ehPar(numero)) {
  console.log(`${numero} é par`);
} else {
  console.log(`${numero} é ímpar`);
}


// 4, Escreva uma arrow function chamada somaArray que recebe um array de números e retorna a soma de todos os elementos.
const somaArray = array => {
  // Use o método reduce para somar os elementos do array
  return array.reduce((soma, elemento) => soma + elemento, 0);
};

// Exemplo de uso
const meuArray = [1, 2, 3, 4, 5];
const resultado = somaArray(meuArray);
console.log(resultado); // Saída: 15


// 5. Crie uma arrow function chamada filtraPares que recebe um array de números e retorna um novo array contendo apenas os números pares.
const array = [1, 2, 3, 4, 5];

const arrayPares = array.filter((numero) => {
  return numero % 2 === 0;
});
console.log(arrayPares); // [2, 4]


// 6. Implemente uma arrow function chamada maiorNumero que recebe dois números como argumentos e retorna o maior deles.
const maiorNumero = (numero1, numero2) => {
  return numero1 > numero2 ? numero1 : numero2
}
console.log(maiorNumero(3, 2))


// 7. Escreva uma arrow function chamada converteParaCelsius que recebe uma temperatura em Fahrenheit e retorna a temperatura equivalente em Celsius. A fórmula é: Celsius = (Fahrenheit - 32) * 5/9.
const converteParaCelsius = (Fahrentempheit) => {
  return (Fahrentempheit - 32) * 5/9.
}
console.log(converteParaCelsius(10))

// 8. Crie uma arrow function chamada inverteString que recebe uma string e retorna uma nova string com os caracteres na ordem inversa.
const inverteString = (string) => string.split("").reverse().join("");

const string = "Olá, mundo!";
const stringInversa = inverteString(string);
console.log(stringInversa); // !dolo, áulO


