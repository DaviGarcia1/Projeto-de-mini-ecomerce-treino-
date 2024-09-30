const calculadora = {
    somar: function somar(n1, n2){
      return  n1 + n2 
      
    },
    subtrair: function subtrair(n1, n2){
        return  n1 - n2 
        
      },
    multiplicar: function multiplicar(n1, n2){
    return  n1 * n2 
    
    },
    dividir: function dividir(n1, n2){
    return  n1 / n2 
    
    }
}
console.log(calculadora.somar(10, 20))
console.log(calculadora.subtrair(20, 10))
console.log(calculadora.multiplicar(2, 3))
console.log(calculadora.dividir(20, 2))


