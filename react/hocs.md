# High order components (HOCs)

Uma hoc é uma função que recebe um componente e então retorna este componente encapsulado com novas funcionalidades. É bem útil para você compartilhar lógicas repetidas entre componentes.

```js
const meuHoc = meuOutroComponente => 
    ({ msg }) => <meuOutroComponente msg={msg.toUpperCase()} /> // novo componente

const texto = ({ msg }) => <p>{msg}</p>

const textoUppercase = meuHoc(texto)

<texto msg="oi" /> // <p>OI</p>
<textoUppercase msg="oi" /> // <p>OI</p>
```

**Não postado.**