# Método reduce em Arrays do JavaScript ES6

O método `reduce` reduz um `array` de valores em um único valor através de uma função chamada `reducer` que é executada para cada elemento do `array` até restar em um único valor. 
O `reducer` recebe o valor que foi acumulado (a acumulação) e o valor atual que precisa ser acumulado e então retorna uma nova acumulação. Resumidamente, ela funciona assim: `reducer(acumulacao, valorAtual) -> acumulacao`
O método `reduce` recebe como primeiro parâmetro a função `reducer` e como segundo parâmetro o valor inicial do acumulador que será passado para o `reducer`.

```js
// Exemplo:

// Esta função será chamada para cada elemento do array ([1, 2, 3]):
//  meuReducer(0, 1) -> 0 + 1 -> 1 // o 0 é o valor inicial da acumulação
//  meuReducer(1, 2) -> 1 + 2 -> 3
//  meuReducer(3, 3) -> 3 + 3 -> 6
const meuReducer = (acumulacao, valorAtual) => {
  const novaAcumulacao = acumulacao + valorAtual;
  return novaAcumulacao;
};
const meusNumeros = [1, 2, 3];
const valorInicialDoAcumulador = 0;
console.log(meusNumeros.reduce(meuReducer, valorInicialDoAcumulador))
```