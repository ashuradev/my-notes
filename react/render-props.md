# Render props 

Render prop é uma técnica em que compartilhamos códigos entre componentes utilizando uma *prop* que recebe uma *função*.

Exemplo:

```js
const MeuComponente = ({ render }) => render({
  message: 'Olá'
});

const MeuComponenteUI = () => 
    <MeuComponente render={({ message }) => <h1>{message}</h1>} />;

const App = () => <MeuComponenteUI />;
```
**Não postado.**
