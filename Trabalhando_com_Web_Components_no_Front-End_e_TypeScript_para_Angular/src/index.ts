//decorators

// function ExibirNome(target: any){
//     console.log(target);
// }

// @ExibirNome
// class Funcionario{}

// @ExibirNome
// class Quincas{}

// //class decorators

// function apiVersion(version: string){
//     return (target: any) => {
//         Object.assign(target.prototype, {__version: version});
//     };
// }

// @apiVersion("1.10")
// class Api{}

// const api = new Api();
// console.log(api.__version);

//atribute decorator
function minLegth(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[exibir:]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api{
    @minLegth(10)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("produtos comprados");
console.log(api.name);
