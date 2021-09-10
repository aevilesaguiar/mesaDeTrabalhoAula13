//1.	Pense na melhor forma de representar tais contas, e por quê? (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)
let contaBancaria = {
    NumeroDaConta: 0,
    TipoDeConta: ["conta corrente", " poupança"],
    saldo: 0,
    TitulardaConta: "",
};
//2.	Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.

//console.log(contaBancaria.NumeroDaConta);
//console.log(contaBancaria.TipoDeConta[0]);

//3.	Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.
function DadosBancarios(numeroConta, tipoDeConta, saldo, titularConta) {
    this.NumeroDaConta = numeroConta;
    this.TipoDeConta = tipoDeConta;
    this.saldo = saldo;
    this.TitulardaConta = titularConta;
}
/*let correntistas = [
    new DadosBancarios(0001, "CC",15000, "João da Silva"),
    new DadosBancarios(0001, "CC",15000, "João da Silva"),
    new DadosBancarios(0002, "CP", 16000, "José da Souza"),
    new DadosBancarios(0003, "CC", 150, "Daniel Mendes"),
    new DadosBancarios(0004, "CP", 1000000, "José de Sá"),
    new DadosBancarios(0005, "CC", 1590, "Joana Ribeiro"),
    new DadosBancarios(0006, "CC",15000, "Sergio da Silva"),
    new DadosBancarios(0007, "CP", 155000, "Alice da Souza")
] */

let conta0001 = new DadosBancarios(0001, "CC", 15000, "João da Silva");
let conta0002 = new DadosBancarios(0002, "CP", 16000, "José da Souza");
let conta0003 = new DadosBancarios(0003, "CC", 150, "Daniel Mendes");
let conta0004 = new DadosBancarios(0004, "CP", 1000000, "José de Santos");
let conta0005 = new DadosBancarios(0005, "CC", 1590, "Joana Ribeiro");
let conta0006 = new DadosBancarios(0006, "CC", 15000, "Sergio da Silva");
let conta0007 = new DadosBancarios(0007, "CP", 155000, "Alice da Souza");
let conta0035 = new DadosBancarios(0035, "CP", 1000000, "José de Sá");
let conta0015 = new DadosBancarios(0015, "CC", 1590, "Joana Ribeiro");
let conta0010 = new DadosBancarios(0010, "CC", 15000, "Sergio da Silva");

//4.	A partir dos 10 usuários, gere uma lista onde todos eles convergem (lista de objetos)

//let correntista=[conta0001,conta0002,conta0003,conta0004,conta0005];

let correntista = [];

correntista.push(
    conta0001,
    conta0002,
    conta0003,
    conta0004,
    conta0005,
    conta0006,
    conta0007,
    conta0010,
    conta0015,
    conta0035
);
console.log(correntista);

//5.	Também nos pedem a criação de um objeto literal chamado banco que terá uma
//propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.

//6.	o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular)
//por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde
// a esse nome inserido.
// for(i in correntista) ele percorre a lista do inicio até o final da lista
let banco = {
    clientes: correntista,
    consultarCliente: function (titular) {
        for (i in this.clientes) {
            if (this.clientes[i].TitulardaConta == titular) {
                return this.clientes[i];
            }
        }
    },
    //7
    deposito: function (titular, qtdeDinheiro) {
        let cliente = this.consultarCliente(titular);
        cliente.saldo += qtdeDinheiro;
        console.log(
            `Depósito realizado, ${titular} seu novo saldo é: ${cliente.saldo}`
        );
    },
    saque: function (titular, qtdeDinheiro) {
        let cliente = this.consultarCliente(titular);
        if (cliente.saldo - qtdeDinheiro < 0) {
            console.log("Saldo insuficiente");
        } else {
            cliente.saldo -= qtdeDinheiro;
            console.log(
                `Saque realizado, ${titular} seu novo saldo é: ${cliente.saldo}`
            );
        }
    },
};
//console exercicio 6
//console.log(banco.consultarCliente("José de Santos"));

//console exercicio 7
banco.deposito("José de Sá", 1000);
banco.saque("José de Sá", 200);

//console.log(banco["clientes"][0]);
//8.	Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor
//a ser extraído. O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado
//seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário
//você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"

//7.	Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade
// de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade
//de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem
//"Depósito realizado, seu novo saldo é: xxx" .

//Desafio - Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string. 
// Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string.  
//

function propriedadeUnica(arr, prop) {
    let aux = [];
    for(i in arr) {
      aux.push({[prop] : arr[i][prop]} )
    } 
    console.log(aux)
  } 
  
  propriedadeUnica(banco.clientes, 'titular')