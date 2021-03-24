var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var resultado = primeiroValor / segundoValor

var operacao = prompt("Digite / caso queira dividir, * para multiplicar, + para somar e - para subtrair: ")

if (operacao == "/") {
 var resultado = primeiroValor / segundoValor
 document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "*"){
 var resultado = primeiroValor * segundoValor
 document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == "+"){
   var resultado = primeiroValor + segundoValor
 document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if(operacao == "-"){
   var resultado = primeiroValor - segundoValor
 document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}
