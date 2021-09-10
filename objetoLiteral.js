/*let Carro={
    cor:"branco",
    andar: function(velocidade){
       return "Andando na velocidade" + velocidade;
    }
}
console.log(Carro.andar(" 130k"));

let cliente={
    nome:"Fulano",
    idade:18,
    cadastrar:function(infos){
        //cadastrar
    }
}

let caneta={
    cor:"azul",
    andar: function(velocidade){
       return "Andando na velocidade" + velocidade;
    }
}
console.log(Carro.andar(" 130k"));

let PessoaHumana={
    nome:"Janaina",
    idade:30,
    sexo:"feminino",
    altura:1.80,
    peso:80,
    imc: function(peso,altura){
        return  peso / (altura * altura);
    }
}

console.log(PessoaHumana.imc(80,1.80));
*/
let PessoaHumana = 
{
  nome:"Janaina",
  idade:30,
  sexo:"feminino",
  imc: function(){
      return  this.peso / (this.altura * this.altura);
  }
}

PessoaHumana.peso = 80;
PessoaHumana.altura = 1.80;

console.log(PessoaHumana.imc());



function Pessoa(nome, idade, sexo,altura,peso) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.altura=altura;
    this.peso=peso;
  }

  let infoPessoa = new Pessoa("Maria", 50, "feminino")


  let Carro={
    cor:"branco",
    rodas:4,
    marca:"fusca",
    andar: function(){
     
       console.log(`Esse carro tem a cor ${this.cor} e tem ${this.rodas} rodas`)
    }
}

Carro.andar();

let info=new Carros("azul", "12", "");
