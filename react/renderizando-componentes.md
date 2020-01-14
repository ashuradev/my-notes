# Renderizando componentes

Para renderizar componentes, você também pode fazer da mesma forma que define elementos no seu JSX:

```js
const Texto = ({ children }) => <p>{children}</p>;

const MeuComponente = ({ numero }) => (
  <MeuOutroComponente 
    minhaProp={numero}
    meuOutraProp={5}
    minhaOutraProp="oi"
    onHover={() => alert('evento onhover')}
  >
    <Texto>oi</Texto>
  </MeuOutroComponente>
);

const App = () => <MeuComponente numero={1} />

ReactDOM.render(<App />, document.getElementById('root'));
```

Obs.: Você também pode usar arrow functions para definir componentes.