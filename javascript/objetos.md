# O que são objetos no JavaScript

Um objeto no JavaScript é uma coleção de propriedades (dados) onde cada propriedade possui um nome e um valor (que pode ser um número, string, objeto, etc).

Para criar um objeto em JS você pode criar ele de diversas formas, entre elas estão a notação literal.

Para usar a notação literal basta utilizar as chaves e então listar as suas propriedades através da sintaxe *propriedade: valor* separadas por vírgulas. Exemplo:

```js
let meuObjetoLiteral = {
    quantidadeDePosts: 227,
    site: 'https://instagram.com/tecmastery',
};
```

Para acessar uma propriedade basta utilizar esta sintaxe: `objeto.nomeDaPropriedade` ou `objeto['nomeDaPropriedade']`. Exemplo:

```js
console.log(meuObjetoLiteral.quantidadeDePosts); // --> 227
```

E para alterar o valor de alguma propriedade basta acessar ela e então atribuir algum valor. Exemplo:

```js
meuObjetoLiteral.quantidadeDePosts++;
meuObjetoLiteral.site = 'https://linktr.ee/tecmastery';
```

Quando uma propriedade de algum objeto possui uma função como valor, esta propriedade passa a ser chamada de método.
