# Introdução ao JSX (React)

JSX é uma extensão de sintaxe para JavaScript que é semelhante ao XML. Ele nos ajuda a criar elementos React (form, input, div, etc) de forma semelhante ao HTML/XML. 

Exemplo de JSX:
```js
const meuTexto = <p>Meu texto</p>;
```

O navegador não consegue interpretar esta sintaxe de JSX, então você irá utilizar o Babel para converter este código para o navegador interpretar. O Babel irá converter este código para algo como:
```js
var meuTexto = React.createElement('p', null, 'Meu texto');
```

Você pode utilizar expressões JavaScript em JSX através de chaves para mostrar alguma coisa:
```js
const title = 'Meu titulo';
const Divisao = <p>{10 / 2}</p>;
const Post = (
  <div>
    <h1>Título: {title}</h1>
    <p>Soma: {1 + 1}</p>
  </div>
); /* quebre o Post em múltiplas linhas e coloque entre parênteses */
```

Observação: Você deverá colocar seu JSX dentro de parênteses e quebrar cada elemento em múltiplas linhas para melhorar a legibilidade de seu código (mas se for somente um elemento, você não precisa fazer isso).