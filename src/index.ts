type heroi = {
    name: string;
    vulgo: string;
};

function printaObjectos(pessoa: heroi){
    console.log(pessoa);
}

//isso printa um objeto!
printaObjectos({
    name: "Bruno Rafael",
    vulgo: "Dev",
});

// console.log("Hello Word!");

//tipos primitivos: boolean, number, string
    let ligado:boolean = false;
    let nome: string = "Bruno";
    let idade: number = 30;
    let altura: number = 1.9;

//tipos especiais: null, undefined 
    let nulo: null = null;
    let indefinido: undefined = undefined;

//tipos abrangentes: any, void
    let retorno: void;
    function selectQuery():void{}; //Comumente usado em funções!

    let retornoView: any = false; //Retorna qualquer coisa!

//objeto - sem previsibilidade
    let produto: object = {
        name: "bruno",
        cidade: "sp",
        idade: "27",
    };

//objeto - com previsibilidade
    type ProdutoLoja = {
        nome: string;
        preco: number;
        unidades: number;
    };

    let meuProduto: ProdutoLoja = {
        nome: "Tênis",
        preco: 89.99,
        unidades: 5,
    };

//arrays
    let dados: string [] = ["bruno", "thainá", "leticia"];
    let dados2: Array<string> = ["bruno", "thainá", "leticia"];

//arrays de multi types (Não recomendada)
// --> "Uma array que posso colocar mais de um tipo de dados, e não preciso seguir a ordem pre-estabelecida!"
    let infos: (string | number)[] = ["bruno", 1929];

//tuplas (Recomendada)
// --> "Parecido com Array Multi Types, porém eu devo seguir a ordem dos tipos!"
    let boleto: [string, number, number] = ["conta de água", 126.30, 38000344747430000003747];

//pequena informação referente a: Metodos de Arrays
// --> "Todos os métodos que usamos no JavaScritp podem ser utilizados no TypeScript"
// ----> Exemplos: Map, Filter, Pop, Reduce, etc...

