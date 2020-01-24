# Como mesclar (juntar) arrays com JavaScript

Para juntar arrays com JavaScript, você pode utilizar o método `concat` em arrays:

```js 
const frutas = ['uva', 'maça'];
const outrasFrutas = ['maracuja', 'pessego'];

const novoArray = frutas.concat(outrasFrutas);

// ['uva', 'maça', 'maracuja', 'pessego'];
console.log(novoArray);
```

Ou a desestruturação do ES6:

```js
const frutasLindas = ['uva', 'maça'];
const outrasFrutasLindas = ['maracuja', 'pessego'];

const novoArrayLindo = [...frutasLindas, ...outrasFrutasLindas];

// ['uva', 'maça', 'maracuja', 'pessego']
console.log(novoArrayLindo);
```