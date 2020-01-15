# Render props 

Render prop é uma *prop* que *recebe* uma função que *retorna* um elemento React. Componentes utilizam render props para determinar o que renderizar nele. Este pattern é bém útil para compartilhar códigos entre componentes.

Exemplo:

```js
const MeuComponente = ({ render }) => render({
  message: 'Olá'
});

const MeuComponenteUI = () => 
  <MeuComponente render={
    ({ message }) => <h1>{message}</h1>} />
  }>;

const MeuOutroComponente = ({ children }) => children({
    minhaOutraMensagem: ''
})

const App = () => (
  <>
    <MeuComponenteUI />
    <MeuOutroComponente>
        {({ message }) => ()}
    </MeuOutroComponente>
  </>
```
**Não postado.**
