import { Conta } from "../model/Conta";

export interface ContaRepository{

    procurarPorNumero(numero:number):void;
    listaTodas():void;
    cadastrar(conta: Conta):void;
    atualizar(conta: Conta):void;
    deletar(numero: number): void;
}

// metodos bancarios

sacar(numero:number, valor:number):void;
depositar(numero:number, valor:number):void;
transferir(numeroOrigem:number, numeroDesrtino:number, valor:number):void;
