// let valores1 = [12,1,5.30];
// let valores2 = [16,2,5.10];

// let codigo1 = parseInt(valores1[0]);
// let numero1 = parseInt(valores1[1]);
// let valorUnitario1 = parseFloat(valores1[2]);

// let codigo2 = parseInt(valores2[0]);
// let numero2 = parseInt(valores2[1]);
// let valorUnitario2 = parseFloat(valores2[2]);

// // TODO:  Retorne o valor total a pagar da compra
// let soma =  (numero1*valorUnitario1) + (numero2*valorUnitario2) ;

// console.log('VALOR A PAGAR: R$ ' + soma.toFixed(2));

let n = 5;
let lis = [2,5,4,20,10];
let increment = 0;

for (let mlt = 0; mlt <= 3; mlt++) {
    lis.forEach(li => {
        if (li % (mlt + 2) == 0) {
            increment++;
        }
    })
    
    console.log(`${increment} Multiplo(s) de ${mlt + 2}`)
    increment = 0;
}