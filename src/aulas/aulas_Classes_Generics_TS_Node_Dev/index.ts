//classes

/*
    data modifiers
        public --> Padrão todos podem acessar 
        private --> Só a class pode usar
        protected --> A classe e a subs calsses podem utilizar (Conceito de POO)
        readonly --> Ela só pode ser lida
*/


class Character{
    protected name?: string; //variavel name foi setada como não obrigatória.
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name; // --> por isso ela não precisa estar no construtor.
        this.stregth = stregth;
        this.skill = skill;
    }

    atack():void{
        console.log(`Atack with ${this.stregth} points`);
    }
}

//Character: superclass
//Magician: subclass

class Magician extends Character{
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number
    ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Bruno",10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.atack();

//generics
function concatArray<T>(...itens: T[]): T[]{ // --> Variavel generica, definada na hora de declarar;
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["bruno", "zoro", "asta"]);

// numArray.push("lucios");

console.log(numArray);
console.log(stgArray);
