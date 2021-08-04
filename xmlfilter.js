const R = require('ramda');

//Exercício 1 - abaixo a declaração da função contentOfTag
//Exercício 3 - a função contentOfTag abaixo é curried
const contentOfTag = R.curry(
    (xmlNode, tagName) => xmlNode.getElementsByTagName(tagName)[0].textContent
);
//Exercício 1 - abaixo a declaração da função contentOfTag
//Exercício 3 - a função contentOfSource abaixo é curried
//Exercício 4 - a função contentOfSource abaixo é high-order
const contentOfSource = contentOfTag(R.__, 'source');
//Exercício 1 - abaixo a declaração da função contentOfAdded
//Exercício 3 - a função contentOfAdded abaixo é curried
//Exercício 4 - a função contentOfAdded abaixo é high-order
const contentOfAdded = contentOfTag(R.__, 'added');
//Exercício 1 - abaixo a declaração da função contentOfUpdated
//Exercício 3 - a função contentOfUpdated abaixo é curried
//Exercício 4 - a função contentOfUpdated abaixo é high-order
const contentOfUpdated = contentOfTag(R.__, 'lastupdated');
//Exercício 1 - abaixo a declaração da função contentOfID
//Exercício 3 - a função contentOfID abaixo é curried
//Exercício 4 - a função contentOfID abaixo é high-order
const contentOfID = contentOfTag(R.__, 'id');
//Exercício 1 - abaixo a declaração da função getGitHubProject
//Exercício 3 - a função getGitHubProject abaixo é curried
//Exercício 4 - a função getGitHubProject abaixo é high-order
const getGitHubProject = xmlNode => contentOfSource(xmlNode).replace('https://github.com/', '');

//Exercício 1 - abaixo a declaração da função elementsToArray
const elementsToArray = nodes => {
    const arr = [];
    for (let i = 0; i < nodes.length; i++)
        arr.push(nodes[i]);
    return arr;
};

//Exercício 1 - abaixo a declaração da função isValid
//Exercício 3 - a função isValid abaixo é curried
const isValid = R.curry(
    (app, addedAfterYear, updatedAfterYear) => {
        if (!contentOfSource(app).includes('github.com'))
            return false;

        const addedDate = new Date(contentOfAdded(app));
        if (addedDate.getFullYear() < addedAfterYear)
            return false;

        const lastUpdatedDate = new Date(contentOfUpdated(app));
        if (lastUpdatedDate.getFullYear() < updatedAfterYear)
            return false;

        return true;
    }
);

module.exports = {
    isValid,
    elementsToArray,
    getGitHubProject,
    contentOfSource,
    contentOfID,
    contentOfAdded,
    contentOfUpdated
};