# Calculadora Estatística em JavaScript

Este é um simples script em JavaScript para calcular a média, mediana e moda de um array de números.

## Funcionalidades

O script realiza as seguintes operações:

- **Média:** Calcula a média aritmética dos números no array.
- **Mediana:** Calcula a mediana dos números no array, que é o valor do meio quando o array está ordenado.
- **Moda:** Identifica o número que aparece com maior frequência no array.

## Como usar

Para utilizar o script, siga os passos abaixo:

1. **Defina o array de números:** Edite a variável `numeros` no código para incluir os números desejados. Por exemplo:
   ```javascript
   const numeros = [1, 3, 2, 5, 4, 2, 6, 7, 2, 2];
   ```

2. **Execute o script:** Abra o console do seu navegador ou execute o arquivo JavaScript em um ambiente Node.js para ver os resultados.

## Exemplo

Suponha que você tenha o seguinte array:
```javascript
const numeros = [1, 3, 2, 5, 4, 2, 6, 7, 2, 2];
```

Ao executar o script, você verá os seguintes resultados no console:
```
Array: [1, 3, 2, 5, 4, 2, 6, 7, 2, 2]
Média: 3
Mediana: 2.5
Moda: 2
```

Neste exemplo, a média dos números é 3, a mediana é 2.5 e a moda é 2.

## Notas

- O script assume que todos os números no array são válidos e numéricos.
- A mediana é calculada ordenando o array e determinando o valor do meio. Em caso de número par de elementos, a mediana é a média dos dois valores centrais.

Este script é útil para análises estatísticas simples em conjuntos de dados pequenos. Para conjuntos de dados maiores ou mais complexos, considere utilizar bibliotecas JavaScript específicas para manipulação e análise de dados.
