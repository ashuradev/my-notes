# Mais sobre JSX e props (React)

`Props` são as propriedades/atributos que algum elemento React recebe. No JSX, você pode especificar as `props` do mesmo modo que você especifica atributos no HTML.

Exemplo:

```js
const input = <input value="Valor do componente" />;
const container = <div width={100 + 100} className="meuContainer" />; // 200 de width
const botao = <button onClick={() => alert('Hello, world!')}>Clique em mim</button> 
```

Você deve especificar as `props` em `camelCase` (por exemplo: o correto é onClick e não onclick) e também você utilizar `className` invés de `class`.

Lembre-se que você pode usar expressões JavaScript dentro do JSX através de `{}` para colocar algum valor, ou seja, você também pode utilizar expressões para colocar algum valor em alguma `prop`, igual nós fizemos no `container` e no `botao`.

Atenção: Quando um elemento não tem conteúdo você **deve** obrigatoriamente fechar este elemento.

Exemplo:

```js
// Errado
const container = <div></div>;

// Correto
const container = <div />;
```