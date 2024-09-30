class contaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }
    depositar(novoSaldo, tipo){
        if(tipo == 'corrente' || tipo == 'Corrente' || tipo == 'CORRENTE'){
            this.saldoCorrente += novoSaldo 
        }else if(tipo == 'poupança' || tipo == 'Poupança' || tipo == 'POUPANÇA'){
            this.saldoPoupanca += novoSaldo 
        }
    }
    sacar(valorSaque, tipo){
        if(tipo == 'corrente' || tipo == 'Corrente' || tipo == 'CORRENTE'){
            if(valorSaque > this.saldoCorrente){
               console.log('Não vai ser possivel sacar. Não possui dinheiro nencessário.')
            }else {
                this.saldoCorrente -= valorSaque 
            }
        }else if(tipo == 'poupança' || tipo == 'Poupança' || tipo == 'POUPANÇA'){
            if(valorSaque > this.saldoPoupanca){
                console.log('Não vai ser possivel sacar. Não possui dinheiro nencessário.')
             }else {
                 this.saldoPoupanca -= valorSaque 
             }
        }
    }
    transferencia(tipo, valorTransferir){
        if(tipo == 'corrente' || tipo == 'Corrente' || tipo == 'CORRENTE'){
            this.saldoPoupanca += valorTransferir 
            this.saldoCorrente -= valorTransferir
        }else if(tipo == 'poupança' || tipo == 'Poupança' || tipo == 'POUPANÇA'){
            this.saldoCorrente += valorTransferir
            this.saldoPoupanca -= valorTransferir 
        }
    }

}