# Componentes controlados e não controlados

Um componente controlado recebe seu atual valor através de `props` e notifica alterações através de `callbacks`.  
Um componente não controlado **controla** e **armazena** o seu estado internamente.    

Exemplos:

```js

const UncontrolledInput = () => <input type="text" />; // Uncontrolled

const ControlledInput = props => 
    <input type="text" value={props} onChange={props.onChange} />; // Controlled

```

**Este guia não foi postado.**