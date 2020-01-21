# Método slice em arrays no JavaScript

O método slice retorna uma parte de um array a partir de um ínicio e um fim (mas não inclui o fim) especificado.

```js
console.log(
    // O interpretador irá retornar os elementos a partir do índice 1
    // até o índice 3 (mas não vai incluir o elemento de índice 3)
    ["abacaxi", "maracuja", "mixirica", "geladinho", "uva"].slice(1, 3)
); // --> Irá mostrar ["maracuja", "mixirica"] no console.
```