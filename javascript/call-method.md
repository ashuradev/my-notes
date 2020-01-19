# Método .call em funções no JavaScript

O método `call` executa uma função com um `this` e com os argumentos passados para o método.

```js
function exemplo(mensagem2, mensagem3) {
    console.log(this.mensagem1); // 'Mensagem 1'
    console.log(mensagem2); // 'Mensagem 2'
    console.log(mensagem3); // 'Mensagem 3'
}

var meuThisCustomizado = {
    mensagem1: 'Mensagem 1'
};

exemplo.call(meuThisCustomizado, 'Mensagem 2', 'Mensagem 3');
```