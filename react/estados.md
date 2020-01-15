# Estado de componentes React

Cada componente possui seu próprio estado (state), que os são dados do componente que mudam ao longo do tempo (ex. de estado: um contador de um componente Counter).  
Você pode definir estado em class-components ou functional components (com hooks). Neste post iremos falar sobre como definir estado em class-components.  
Para definir um estado em um class-component, você deve declarar uma propriedade chamada `state` na classe. Quando algum dado desta propriedade mudar, o React irá renderizar novamente o componente, para atualizar as informações na página.  
E para mutar (alterar) o estado, você deve utilizar o método `this.setState` na sua classe. Ao chamar este método, o React irá fazer o merge (mesclar) do estado passado com o estado atual do componente, e então renderizar denovo o componente com as novas informações.  

```js
import React, { Component } from 'react';
class Counter extends Component 
{
  state = {counter: 0} //declaramos o state da classe

  // Método increment
  // Incrementa o contador
  increment = () => {
    const counter = ++this.state.counter;
    // utilizamos o this.setState para alterar algum estado
    // você só precisa passar o estado que deseja alterar no this.setState
    this.setState({ counter }); 
  }
  
  // Método decrement
  // Decrementa o contador
  decrement = () => this.setState()
  render()
  {
    return (
      <div>
        <h1>{this.state.counter}</h1> <!-- acessamos o state com this.state -->
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
      </div>
    )
  }
}
```