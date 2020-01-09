# Diferença entre var e let

A diferença entre var e let é que var declara uma variável que estará disponível somente em um escopo de uma função e o let declara uma variável que estará disponível somente em um escopo de bloco.

Exemplo:

```js
function teste() {
    var mensagem = 'oi';
    
    if (mensagem) {
        let outraMensagem = 'tudo bem?';
        console.log(outraMensagem); // --> 'tudo bem?'
        console.log(mensagem); // --> 'oi';
    }
    console.log(mensagem); // --> 'oi'
    console.log(outraMensagem); // --> gera um erro
}

teste();
console.log(mensagem); // --> gera um erro
console.log(outraMensagem); // --> gera um erro
```