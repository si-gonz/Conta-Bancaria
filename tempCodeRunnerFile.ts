import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    // criando um objeto da classe ContaController 
    const contas = new ContaController();

//Novas Instâncias da Classe ContaCorrente (Objetos)
contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

// Novas Instâncias da Classe ContaPoupança (Objetos)
contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));
    
    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log("Digite o Número da Agência: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o Nome do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Escolha o Tipo da Conta:");
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) +1; // vetor sempre começa 0 por isso incrementa 1 porque tem tipo 1 ou 2

                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat('');

                    switch (tipo){
                        case 1:
                            console.log("Digite o Saldo da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.cadastrar(new ContaCorrente(0, agencia, tipo,titular,  saldo, limite))
                        break;
                        case 2:
                            console.log("Digite o Dia de Aniversario da Poupança: ");
                            aniversario = readlinesync.questionInt('');
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),agencia, tipo,titular,  saldo, aniversario))
                        break;
                    }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o numero da conta:")
                    numero = readlinesync.questionInt('');

                    contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre() {
    console.log(colors.fg.yellowstrong + "\n","*".repeat(24) ," Programa encerrado! ", "*".repeat(20), "\n"+ colors.reset)
    console.log("Desenvolvido por: Simone Gonzaga")
    console.log("GitHub: si-gonz")
    console.log("LinkedIn: https://www.linkedin.com/in/simonegonzagag/")
    console.log(colors.fg.yellowstrong + "\n","*".repeat(68) ,"\n"+ colors.reset)
    process.exit(0)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


main();