"use strict";
// exercicio 1 ===============================================
const numberColletion = [6, 4, 3, 9, 20];
const maxMin = (vs) => {
    if (vs.length < 2) {
        console.log('é necessario ter mais de 2 numeros no vetor.');
        return [0, 0];
    }
    let minNumber = Math.min(...numberColletion);
    let maxNumber = Math.max(...numberColletion);
    return [minNumber, maxNumber];
};
console.log(`exercicio1: ${maxMin(numberColletion)}`);
// exercicio 2===============================================
const numberOrder = [1, 2, 3, 4, 5];
const all = (vs, fn) => {
    var hasError = false;
    for (let i = 0; i < (vs.length - 1); i++) {
        let currentBefore = i;
        let currentAfter = i + 1;
        const response = fn(vs[currentBefore], vs[currentAfter]);
        if (!response) {
            hasError = true;
        }
    }
    if (hasError)
        return false;
    return true;
};
console.log(`exercicio2: ${all(numberOrder, (x, y) => x < y)}`);
// exercicio 3===============================================
// funcao para saber se todos os numeros da arrayy é par 
const numbersPairs = [2, 4, 6, 8, 10, 11];
const isPair = (vs, fn) => {
    var hasError = false;
    for (let i = 0; i < vs.length; i++) {
        let currentBefore = i;
        const response = fn(vs[currentBefore]);
        if (!response) {
            hasError = true;
        }
    }
    if (hasError)
        return false;
    return true;
};
console.log(`exercicio3: ${isPair(numbersPairs, (x) => (x % 2) === 0)}`);
// exercicio 4===============================================
const numberDisordered = [4, 7, 10, 11, 12, 5];
const hasBigger = (vs, fn) => {
    var hasTrue = false;
    for (let i = 0; i < (vs.length - 1); i++) {
        let currentBefore = i;
        let currentAfter = i + 1;
        const response = fn(vs[currentBefore], vs[currentAfter]);
        if (response) {
            hasTrue = true;
            i = vs.length + 1;
        }
    }
    if (hasTrue == false)
        return false;
    return true;
};
console.log(`exercicio4: ${hasBigger(numberDisordered, (x, y) => x > y)}`);
// exercicio 5===============================================
// verificar se existe pelo menos um par de numeros pares 
const numbersPair = [4, 7, 10, 12, 12, 5];
const hasPairOdd = (vs, fn) => {
    var hasTrue = false;
    for (let i = 0; i < (vs.length - 1); i++) {
        let currentBefore = i;
        let currentAfter = i + 1;
        const response = fn(vs[currentBefore], vs[currentAfter]);
        if (response) {
            hasTrue = true;
            i = vs.length + 1;
        }
    }
    if (hasTrue == false)
        return false;
    return true;
};
console.log(`exercicio5: ${hasBigger(numbersPair, (x, y) => ((x % 2) === 0) && ((y % 2) === 0))}`);
