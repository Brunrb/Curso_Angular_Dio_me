import { NodeRuntime } from "inspector";
import { PlatformPath } from "path";

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

//datas
    let aniversario: Date = new Date("1996-11-10 19:21");
    console.log(aniversario.toString());

//funções
    function addNumber(x: number, y: number): number{
        return x + y;
    }

    function addHello(name: string): string{
        return `Hello ${name}, this is your number: `;
    }

    let soma: number = addNumber(8,15);

    console.log(addHello("Bruno")+soma);

// --> função com multi tipos
    function CallToPhone(phone: number | string): number | string{
        return phone;
    }

    console.log(CallToPhone(11973482663)); //ou --> (CallToPhone("11 97348-2663"));
        //náo dará erro, porque ele aceita mais de um tipo, de acordo com o que foi declarado.
        //porém se for colocado qualquer tipo que não seja o declarado, dará erro!

// --> função Async
    async function getDataBase(id: number): Promise<string> {
        return "Bruno"; // --> Aqui ele retorna uma string, em um contexto real ele devolve os
                            // dados da id requerida na função.
    }

    
//interfaces (type x interface)
    type robot = {
        id: number;
        name: string;
    };

    interface robot2{
        id: number,
        name: string,
    }; // --> Utilizado mais com Class, como um contrato.

    const bot: robot = {
        id: 1,
        name: "megaman",
    }; // --> Se colocar robot2 também irá funcionar perfeitamente.

    type robot_ult = {
        readonly id: number | string;
        name: string;
    }

    const bot_ult: robot_ult = {
        id: 1,
        name: "robocop",
    };
    
    interface robot_ult2{
        readonly id: number | string;
        name: string;
    }

    const bot_ult2: robot_ult2 = {
        id: 2,
        name: "ultraman",
    };

    console.log(bot);
    console.log(bot_ult);
    console.log(bot_ult2);