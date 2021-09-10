let json={
    "nome":"Marcos",
    "sobrenome":"Santana",
    "idade":25,
    "linguagens":["PHP","JS","RUBY"],
    "ramoProfissional":{
        "experiencia":"hard",
        "anos":7
    }
}

console.log(json.ramoProfissional.experiencia)
console.log(json.linguagens[1])

function DdosJson(nome, sobrenome, idade){
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.idade =idade;
}

let info=new DdosJson("Maria", "da Silva", 36);






