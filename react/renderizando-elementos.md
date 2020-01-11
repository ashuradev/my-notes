# Renderizando elementos React com ReactDOM

Para renderizar elementos React numa página web você pode utilizar a biblioteca `ReactDOM`.

Antes de renderizar elementos, você precisará ter um elemento no DOM real chamado node raíz ou root node, onde o ReactDOM irá renderizar elementos React. Um exemplo de root node é este:
```html
<div id="root"></div>
<!-- Esta div fica em public/index.html em projetos que utilizam create-react-app -->
```
Nesta `div`, o ReactDOM irá renderizar toda a sua aplicação React.

Para renderizar algum elemento em algum node do DOM basta utilizar o método `render` do pacote ReactDOM.

```javascript
// Exemplo:
// Este arquivo fica em src/index.js em projetos que utilizam create-react-app.
import ReactDOM from 'react-dom';
// O método render irá renderizar o elemento h1 num elemento com ID root.
ReactDOM.render(
    <h1>Olá, mundo!</h1>, 
    document.getElementById('root')
);
```

O ReactDOM renderiza somente quando necessário.