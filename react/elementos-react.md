# Os elementos do React

Elementos React são objetos que descreve alguma coisa que será mostrada na tela, como forms, inputs, textos, parágrafos, etc.  
  
Exemplo de elemento React:  
  
```js
const meuTitulo = {
    type: 'h1', // aqui fica o tipo do elemento, aqui pode ficar algum elemento do HTML como p, div, form, etc
    props: { // aqui fica os atributos do elemento - as propriedades
        style: { color: 'red' },
        children: 'Meu texto aqui' // children é uma prop especial que diz qual será o conteúdo de um elemento
    },
};
```

Você poderá utilizar o método `createElement` do pacote `react` para criar elementos, ao invés de criar eles diretamente. Este método ajuda a criar elementos facilmente e faz algumas coisas adicionais para deixar seu código com menos bugs.

```js
import React from 'react';

const meuTitulo = React.createElement(
    'h1', // o primeiro parâmetro é type do elemento 
    { // o segundo parâmetro são os atributos do elemento
        style: { color: 'red' },
        onClick: () => alert('você clicou aqui')
    },
    'Meu texto aqui' // o terceiro parâmetro é o children do elemento
);
```