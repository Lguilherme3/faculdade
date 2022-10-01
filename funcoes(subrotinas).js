// var num1 = 10
// var num2 = 4

// function somar() {
//    console.log(num1 + num2) 
// }
// somar()

// function subtrair() {
//     console.log(num1 - num2)
// }
// subtrair()

// function multiplicar() {
//     console.log(num1 * num2)
// }
// multiplicar()

// function dividir() {
//     if(num1 == 0 || num2 == 0){
//         console.log('não podemos dividir por 0')
//     } else {
//         console.log(num1/num2)
//     }
    
// }
// dividir()

// Exemplo 2 - Faça um algoritmo para calcular o valor do imposto e o valor do
// desconto de um salário. Sabe-se que o imposto de é 7% e o desconto é de 5%, em
// que cada operação deve ser realizada em um sub-rotina apropriada

// var salario = 3400

// function impostoSalario() {
//     imposto = (salario * 7) / 100
// }
// impostoSalario()

// function descontoSalario() {
//     desconto = (salario * 5) / 100
// }
// descontoSalario()

// console.log(`O imposto sobre o salário é de ${imposto + ' reais'} eo desconto é ${desconto + ' reais'}, você recebera ${salario - imposto - desconto + ' reais'}.`)

// O terceiro tipo de sub-rotina a ser explorada trata-se das sub-rotinas sem parâmetros e com retorno, também conhecidas como funções, são consideradas um
// desvio para a execução de um conjunto de instruções bem definidas e como as
// funções SEMPRE retornam um valor, devem ser atribuídas a uma variável.
// Exemplo 3 - Faça um algoritmo para calcular a área de um quadrado. O cálculo
// deve ser feito em uma função.

// var ladoQuadrado = 2

// function calcLado() {
//     area = ladoQuadrado * ladoQuadrado
//     console.log(area)
// }

// calcLado()


// O quarto tipo de sub-rotina a ser explorada trata-se das sub-rotinas com parâmetros e com retorno, também conhecidas como funções, são consideradas um
// desvio para a execução de um conjunto de instruções bem definidas e como as
// funções SEMPRE retornam um valor, devem ser atribuídas à uma variável. Neste
// caso, além do desvio são fornecidos valores para a subrotina.
// Exemplo 4 - Faça um algoritmo para calcular o novo salário sabendo que este
// tem aumento de 10% e imposto é de 6% já sobre o salário reajustado. Os cálculos
// devem ser feitos em funções.

// var salario = 1000

// function salarioAumento() {
//     aumento = (salario * 10) / 100
// }
// salarioAumento()

// var salarioReajustado = salario + aumento

// function salarioImposto() {
//     salImpostoReajustado = (salarioReajustado * 6) / 100
// }
// salarioImposto()

// console.log(`O seu salário era ${salario} reais, com o reajuste de 10% ficou ${salarioReajustado} reais, com o imposto de 6% sendo descontado você receberá ${salarioReajustado - salImpostoReajustado} reais no final do mês.`)