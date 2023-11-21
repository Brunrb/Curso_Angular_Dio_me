"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printaObjectos(pessoa) {
    console.log(pessoa);
}
printaObjectos({
    name: "Bruno Rafael",
    vulgo: "Dev",
});
let ligado = false;
let nome = "Bruno";
let idade = 30;
let altura = 1.9;
let nulo = null;
let indefinido = undefined;
let retorno;
function selectQuery() { }
;
let retornoView = false;
let produto = {
    name: "bruno",
    cidade: "sp",
    idade: "27",
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
let dados = ["bruno", "thainá", "leticia"];
let dados2 = ["bruno", "thainá", "leticia"];
let infos = ["bruno", 1929];
let boleto = ["conta de água", 126.30, 38000344747430000003747];
let aniversario = new Date("1996-11-10 19:21");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
function addHello(name) {
    return `Hello ${name}, this is your number: `;
}
let soma = addNumber(8, 15);
console.log(addHello("Bruno") + soma);
