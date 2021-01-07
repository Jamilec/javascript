const numeros = [1,2,3];
numeros.unshift(0);
console.log(numeros);

numeros.splice(1,0,'b');
console.log(numeros);

numeros.push(4);
console.log(numeros);