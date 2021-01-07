

function Pessoa(nome, idade, altura, peso) {
    this.nome = nome,
    this.idade = idade,
    this.altura = altura,
    this.peso = peso,
    this.ligar = function (){
        console.log ("fazendo ligação");
    }
}
const pessoa = new Pessoa ('Jamile', 19, 1.57, 58);
console.log (pessoa);