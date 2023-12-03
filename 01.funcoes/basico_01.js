let a = 4;
console.log(a)

// Function declaratin
function bomDia(){
    console.log('Bom dia!')
}
bomDia();


// Function expression
const boaTarde = function(){
    console.log('Boa tarde')
}
boaTarde();


function somar(a, b){
    return a + b
}
// Cria uma const que recebe a funcao e os parametros e imprime esta constante
const resultado = somar(1,2);
console.log(resultado);
// Ou imprime a funcao e os parametros
console.log(somar(2,3));