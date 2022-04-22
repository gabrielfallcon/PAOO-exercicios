"use strict";
// obs: professor caso queira fazer alguma alteracao no codigo
// para validar alguma funcao, é necessario rodar 
// o comando yarn build para transpilar o codigo novamente
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
const numberOrderGenericS = ['v', 'ss'];
const allGeneric = (vs, fn) => {
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
console.log(`exercicio3: ${allGeneric(numberOrderGenericS, (x, y) => (typeof x === "string") && (typeof y === "string"))}`);
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
const numberDisorderedGeneric = [4, 7, 10, 11, 12, 5];
const hasBiggerGeneric = (vs, fn) => {
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
console.log(`exercicio5: ${hasBiggerGeneric(numberDisorderedGeneric, (x, y) => x > y)}`);
