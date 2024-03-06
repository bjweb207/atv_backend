const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')


let nome = readlineSync.question('Digite o nome da cidade: ')
let estado = readlineSync.question('Digite o nome do estado: ')
let numPopulacao = Number(readlineSync.question('Digite o número de habitantes: '))
let numHomens = Number(readlineSync.question('Digite o número de homens da cidade: '))
let numMulheres = Number(readlineSync.question('Digite o número de mulheres da cidade: '))

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()


console.log('=============================')
console.log('Dados da cidade e população')
console.log('=============================')
console.log(`O porcentual de homens da cidade é: ${homensPercentual.toFixed(0)} e ${numPopulacao} de habitantes.`)
console.log(`O porcentual de mulheres é: ${mulheresPercentual.toFixed(0)} e ${numPopulacao} de habitantes.`)
console.log(`=============================`)
