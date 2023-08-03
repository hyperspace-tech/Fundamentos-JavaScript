//fundamentos
// var nome = valor
var minhaVariavel = "Ola, Mundo";

console.log(minhaVariavel);

var meuNumero = 10;
console.log(meuNumero);

console.log(meuNumero + 5);

console.log(typeof meuNumero);

var booleano = true; //false

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//let e const 
//novas formas de declarar variaveis

let x = 10;
const y = 6;

console.log(x, y);

//Operadores aritmeticos

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//Operadores de comparacao
console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

//Operadores logicos
// AND  &&
// or ||
console.log(15 > 5 && 28 > 14);
console.log(15 > 5 && 28 < 14);
console.log(15 < 5 && 28 < 14);

console.log(15 > 5 || 28 > 14);
console.log(15 > 5 || 28 < 14);
console.log(15 < 5 || 28 < 14);

//Conversao de  tipos 
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

//Estrutura de condicao - if / else, else / if
const idade = 60;

if (idade < 13) {
    console.log("crianca");
} else if (idade < 20) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

if (true) {
    console.log("Isso executa");
} else {
    console.log("Isso agora e executavel");
}

// switch
const fruta = "maça";

switch (fruta) {
    case "banana":
        console.log("banana e a fruta ! ");
        break;
    case "maça":
        console.log("maca e a fruta");
    default:
        console.log("fruta nao encontrada")
}

//Estrutura de repeticao 
// 1, 2, 3, ... => dependendo de uma condicao 

//contador, condicao de limite, incremento 
for (let i = 0; i < 5; i++) {
    //concatenacao
    console.log("o valor de i e: " + i);
}

//while 
let k = 0;

while (k < 5) {
    console.log("o valor de k e: " + k);
    k++;
}

//do while
let j = 0;

do {
    console.log("o valor de j e: " + j);

    j++;
} while(j < 5);

//funcoes 
//funtion nome(arg1, arg2) { corpo };

function cumprimentar(nome){
    console.log("Ola" + nome);
}

//invocacao = nome()
cumprimentar("Joao Gabriel");

//escopo de variaveis
let cor = "azul";

function mostraCor() {
    let cor = "verde";
    console.log(cor);
}

console.log(cor);

mostraCor();

//hoisting = içamento

testHoisting();

function testHoisting(){
    console.log("deu certo !");
}

//arrow funtion
const testeArrow = () => console.log("Isso tambem e uma  funcao!");

testeArrow();

//thurty e falsy
const minhaVariavel1 = "" //falsy

const minhaVariavel2 = "algum texto";

if(minhaVariavel1){
    console.log("Isso e verdadeiro");
} else {
    console.log("E falso ");
}

if(minhaVariavel2){
    console.log("Isso e verdadeiro");
} else {
    console.log("E falso ");
}

//array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[4]);

numeros.push(6);

console.log(numeros);

//protype => Objeto -> objeto 2 
//array => nossos arrays
numeros.pop();

console.log(numeros);

//strings 
const minhaNovaString = "Ola mundo!";

//concatenizacao = +
const minhaString = minhaNovaString + "como voce esta ?";

console.log(minhaString);

//interpolacao
const minhaString2 = `${minhaNovaString}como voce esta ?`;
console.log(minhaString2);

console.log(minhaString2.length); //quantidade de caracteres 
console.log(minhaString2[5]);
console.log(minhaString2.toUpperCase());

//data e hora 
const agora = Date();
console.log(agora);

const nata1 = new Date(2023, 11, 25);
console.log(nata1);

//math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(16));

console.log(Math.pow(2, 3));