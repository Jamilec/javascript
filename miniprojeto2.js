let valorMaior = max (5,9);
console.log(valorMaior);

function max(numero1,numero2) {
    if(numero1 > numero2)
        return numero1;
    return numero2;
}

//Uma forma mais limpa de fazer seria:
// return numero1 > numero2 ? numero1: numero2;
// ?: se sim 
// : se não