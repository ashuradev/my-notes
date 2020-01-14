# Métodos de ciclo de vida no React

Cada componente React possui diversos métodos que são chamados pelo React em cada etapa/fase do seu ciclo de vida. 

Alguns métodos de ciclo de vida do React:

```js
import React from 'react';

class Feed extends React.Component 
{
  // Este é um método de ciclo de vida
  // Ele é executado após o componente ser inserido no DOM (quando é renderizado no DOM / montado)
  // Este método é útil para fazer efeitos colaterais (como acessar a API do seu aplicativo)
  // Aqui também você pode acessar o seu DOM
  componentDidMount()
  {
    api.post('/usuarios', { nome: 'lucas', senha: '123' });
  }

  // Executado quando o componente irá ser removido do DOM
  componentWillUnmount()
  { 
    alert('Eu estou prestes a morrer :(');
  }

  // Executado quando o componente foi atualizado no DOM.
  componentDidUpdate()
  {
    console.log('eu fui atualizado no DOM :D');
  }

  // Este método deve ser uma função pura
  render()
  {
    return <p>O teu feed aqui</p>;
  }
}
```