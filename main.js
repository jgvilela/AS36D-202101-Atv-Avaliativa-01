const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

//Exercício 4 - as funções isValid, elementsToArray, getGitHubProject abaixo são high-order
const { isValid, elementsToArray, getGitHubProject } = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
//Exercício 4 - a função parseFromString abaixo é high-order
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

//Exercício 1 - abaixo a declaração da função isAddedAfter2018AndUpdatedAfter2019
//Exercício 3 - a função isAddedAfter2018AndUpdatedAfter2019 abaixo é curried
//Exercício 4 - a função isAddedAfter2018AndUpdatedAfter2019 abaixo é high-order
const isAddedAfter2018AndUpdatedAfter2019 = isValid(R.__, 2018, 2019);

//Exercício 4 - a função filter e map abaixo são high-order
const addedApps = elementsToArray(document.getElementsByTagName('application'))
    .filter(isAddedAfter2018AndUpdatedAfter2019)
    .map(getGitHubProject);

//Exercício 2 - função join possui efeito colateral pois altera o conteúdo de addedApps
//Exercício 4 - a função log abaixo é high-order
console.log(addedApps.join('\n'));
 
// (Exercício 1) Identifique todas as declarações de funções neste projeto
    // Adicione um comentário identificando-as

// (Exercício 2) Identifique quais funções no projeto possuem efeitos colaterais (side-effects)
    // Adicione um comentário identificando-as

// (Exercício 3) Identifique quais funções são curried
    // Adicione um comentário identificando-as

// (Exercício 4) Identifique quais funções são high-order
    // Adicione um comentário identificando-as

// (Exercício 5) Crie um novo arquivo main2.js (baseado no main.js) que seleciona todos as apps adicionadas
// depois do ano 2000 e atualizadas em 2020. Ao imprimir as apps, além do nome, imprima
// a data que foi adicionada e a data da última atualização.