# Class components

Componentes em React podem também serem escritos na forma de classes:

```js
import { Component } from 'react';

class MeuLindoComponente extends Component 
{
  render()
  {
    const { titulo } = this.props;

    return (
      <div>
        <h1>{titulo}</h1>
      </h1>
    )
  }
}
```

Cada *`class-component`* precisa extender a classe `Component` do pacote `react`, e além disso precisa implementar o método `render`. O método `render` é responsável por retornar os elementos React que irão ser renderizados quando você chamar o componente, em outras palavras, no método `render` você deve implementar o JSX/visualização do seu componente.

As props que são passadas para seus componentes, serão armazenadas na tua classe automaticamente pelo React, para acessar elas basta usar `this.props`.

*Obs*: Para mostrar algum componente no JSX, basta chamar ele como se estivesse chamando algum elemento React (exemplo: <MeuLindoComponente minhaProp="oi" minhaOutraProp={1+1}>)