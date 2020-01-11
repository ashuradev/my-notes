# Functional components ou componentes funcionais do React

Functional components são componentes que utilizam somente funções. Estas funções recebem props (propriedades) e estados e então retornam elementos React com base neles.

Exemplo de um functional component:

```js
const MeuComponente = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);
```

Obs.: Props são objetos.

Você pode usar desestruturação do ES6 nas props:

```
const MeuComponente = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);
```