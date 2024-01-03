// let entrada = [1,4,5,1,1];
// let p, j1, j2, r, a;
        
// p = parseInt(entrada[0]);
// j1 = parseInt(entrada[1]);
// j2 = parseInt(entrada[2]);
// r = parseInt(entrada[3]);
// a = parseInt(entrada[4]);
    
    	
// if (r == 1  && a == 0) console.log("Jogador 1 ganha!");
// else if (r == 0 && a == 1) console.log("Jogador 1 ganha!");
// else if (r == 1 && a == 1) console.log("Jogador 2 ganha!");
// else if (p == 0 && (j1 + j2) % 2 != 0)console.log("Jogador 1 ganha!");
// else if (p == 1 && (j1 + j2) % 2 == 0) console.log("Jogador 1 ganha!");
// else console.log("Jogador 2 ganha!");

// FIM DO PRIMEIRO DESAFIO!

// var line = [16,2];

// var hInicial = parseInt(line[0]);
// var hFinal = parseInt(line[1]);


// if (hInicial>hFinal) { 
//     console.log('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' Hora(s)');
// } else if (hFinal>hInicial) {
//     console.log('O JOGO DUROU ' + (hFinal - hInicial) + ' Hora(s)');
// } else {
//    console.log('O JOGO DUROU 24 HORA(S)');
//}

// FIM DO SEGUNDO DESAFIO

// let C = parseInt(4);
        
// for (let i = 0; i < C; i++) {
//     var input = C;
//     let N =  parseInt(input[0]);
//     let M = parseInt(input[1]);
//     let digitos = (Math.log10(Math.pow(N,M)));
//     console.log(digitos);
// }

let C = parseInt([100,100]);

for (let i = 0; i < C; i++) {
    var input = [100,100];
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);

    // Calcular a potência N^M
    let digitos = parseInt(Math.log10(Math.pow(N, M))+1);

    // Imprimir a quantidade de dígitos
    console.log(digitos);
}