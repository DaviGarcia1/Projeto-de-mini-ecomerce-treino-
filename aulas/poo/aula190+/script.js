let cachorro = {
    raca: '',
    patas: 4,
    latir: function() {
      console.log("Auauauauauaauu")
    }
  }
  //aula 190
  
  let viralata = Object.create(cachorro)
  console.log(Object.getPrototypeOf(viralata))
  viralata.raca = 'viralata'
  console.log(viralata.raca)
  viralata.latir()
  
  
  
  function escolherComida(nome, sabor, quantidade) {
    let comida = Object.create({});
    comida.nome = nome;
    comida.sabor = sabor;
    comida.quantidade = quantidade;
    comida.qualidade = 'boa';
    return comida
  }
  let hamburguer = escolherComida('hamburguer', 'x-tudo' , 2 )
  
  
  
  function calendarioNamorada (sex, sab, domingo){
    let calendario = Object.create({});
    calendario.sex = sex;
    calendario.sab = sab;
    calendario.domingo = domingo;
    calendario.undefined = 'vamos dormir;'
    return calendario
  }
  let calendario = calendarioNamorada('vamos ao cinema', 'ir a igreja', 'dormir e ver filme');
  
  
  //AULA 191  
  function Cinema (filme, horario, sala){
    this.filme = filme;
    this.horario = horario;
    this.sala = sala; 
    this.comida = 'pipoca';
    this.bebida = 'suco';
  }
  let velozesFuriosos = new Cinema('velozes e furiosos', '19:00', 'sala 3');
  console.log(velozesFuriosos);
  console.log(velozesFuriosos.filme);
  console.log(velozesFuriosos.horario);
  console.log(velozesFuriosos.sala);
  
  //aula 192
  //classe constructor com métodos separados das propriedades
  function Casa(filhoMaisNovo){
    this.filhoMaisNovo = filhoMaisNovo;
    this.irma = 'Hellen';
    this.irmao = 'Daniel';
    this.pai = 'GLadyston';
    this.mae = 'Jorceli';
  }
  Casa.prototype.falaDoJantar = function(){
    console.log('Hora do jantar cambada!')
  }
  
  let filho = new Casa('Davi Garcia');
  console.log(filho.irma);
  console.log(filho.pai);
  console.log(filho.mae);
  console.log(filho.filhoMaisNovo);
  filho.falaDoJantar()
  
  //classe constructor com métodos juntos das propriedades.
  function jogador(nome, posicao, camisa){
    this.nome = nome
    this.posicao = posicao
    this.camisa = camisa
    this.chutar = function(){
      console.log('Chutando...')
    }
  }
  let neymar = new jogador('Neymar', 'Meia/Ponta', 10);
  neymar.chutar();
  console.log(neymar.nome);
  console.log(neymar.posicao);
  console.log(neymar.camisa);
  console.log(Object.getPrototypeOf(neymar))

  //aula 193 novo modo de criar constructor e classes. 3S6
  class jogo {
    constructor(ps5, xbox, nintendo){
        this.ps5 = ps5;
        this.xbox = xbox;
        this.nintendo = nintendo;
        this.emoji = function(){
            console.log('hahaa eu sou o melhor!');
        }
    }
} 
  let microsoft = new jogo('minecraft', 'cod6', 'mario bross');
  console.log(microsoft)
  console.log(microsoft.ps5)
  console.log(microsoft.xbox)
  console.log(microsoft.nintendo)
  microsoft.emoji();
  

  //aula 194 adicionais sobre classe. Não se pode adicionar propriedade fora do constructor. Apenas com o prototype é possivel
  // e o método pode ser declarado depois do "constructor"  
    let akuaLaguna = new jogo('minecraft', 'cod6', 'mario bross');
    jogo.prototype.ps4 = 'fifa25'
    console.log(akuaLaguna.ps4)

//aula 196 Symbol 
class Cachorro {
    constructor(raca) {
        this.raca = raca
    }
    latir() {
        console.log('Au au au');
    }
}
    //Declarando o Symbol:
    let patas = Symbol();
    let codigo = Symbol();
    Cachorro.prototype[patas] = 4;
    Cachorro.prototype[codigo] = 10;

    //criando instâncias 
    let labrador = new Cachorro('labrador');
    let golden = new Cachorro('golden');
    let caoGuarda = new Cachorro('caoGuarda');
    let hotvaller = new Cachorro('hotvaller');
    console.log(labrador[patas]);
    console.log(golden[patas]);
    console.log(caoGuarda[patas]);
    console.log(hotvaller[patas]);
    console.log(labrador[codigo])

