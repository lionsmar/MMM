// Array de números
const numeros = [1, 3, 2, 5, 4, 2, 6, 7, 2, 2];

// Calculando a média
const soma = numeros.reduce((acc, val) => acc + val, 0);
const media = soma / numeros.length;

// Calculando a mediana
const sorted = numeros.slice().sort((a, b) => a - b);
const meio = Math.floor(sorted.length / 2);
let mediana;
if (sorted.length % 2 === 0) {
    mediana = (sorted[meio - 1] + sorted[meio]) / 2;
} else {
    mediana = sorted[meio];
}

// Calculando a moda
const frequencia = {};
numeros.forEach(num => {
    frequencia[num] = (frequencia[num] || 0) + 1;
});

let moda;
let maxFrequencia = 0;
for (const num in frequencia) {
    if (frequencia[num] > maxFrequencia) {
        moda = num;
        maxFrequencia = frequencia[num];
    }
}

moda = +moda; // Converte para número, pois moda é uma string

// Exibindo os resultados
console.log(`Array: [${numeros}]`);
console.log(`Média: ${media}`);
console.log(`Mediana: ${mediana}`);
console.log(`Moda: ${moda}`);