# Método .bind no JavaScript

O método `bind` retorna uma nova função com um `this` e com os argumentos já passados para ela.

```js
function exemplo(mensagem2, mensagem3) {
    console.log(this.mensagem1); // 'Mensagem 1'
    console.log(mensagem2); // 'Mensagem 2'
    console.log(mensagem3); // 'Mensagem 3'
}

var meuThisCustomizado = {
    mensagem1: 'Mensagem 1'
};

var meuNovoExemplo = 
    exemplo.bind(meuThisCustomizado, 'Mensagem 2', 'Mensagem 3');

meuNovoExemplo();
```