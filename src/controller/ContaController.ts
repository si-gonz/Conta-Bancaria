import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar()
        }
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

// Colecao Array que vai armazenar os Objetos Conta
private listaContas = new Array<Conta>();

//Controlar os Numeros das Contas 
public numero: number = 0; // public pq precisa acessar do menu

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\n Conta não encontrada! ")    
    }

    listaTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(" A conta foi cadastrada com sucesso! ")
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    // Métodos Auxiliares 

    public gerarNumero(): number{
    return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
    
}