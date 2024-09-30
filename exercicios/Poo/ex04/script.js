 class Carro {
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }
     dirigirCarro(km){
        let litrosConsumidos = km/this.consumo
        this.gasolinaRestante -= litrosConsumidos
    }
    abastecer(gas){
        let novaGasolina = gas + this.gasolinaRestante;
        this.gasolinaRestante = novaGasolina
    }
    suaSituacao(){
        console.log(`Seu carro é ${this.marca} da cor ${this.cor}, possui ${this.gasolinaRestante} e consome ${this.consumo}`);
    }
 }

 let volvo = new Carro('Volvo', 'Preto', 100, 14);
 console.log(volvo)
 volvo.dirigirCarro(25);
 console.log(volvo.gasolinaRestante)
 volvo.dirigirCarro(200);
 console.log(volvo.gasolinaRestante)
 volvo.abastecer(20)
 console.log(volvo.gasolinaRestante)