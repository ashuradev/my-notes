# Criando seu primeiro aplicativo React (Olá Mundo)

Para um criar um aplicativo React, você pode usar a ferramenta `create-react-app`. Para rodar esta ferramenta, abra um terminal e execute este comando: `npx create-react-app hello-world`

**Obs.**: Você precisa ter o NodeJS instalado para usar o `create-react-app`.

Executando este comando, o `create-react-app` irá criar um projeto React na pasta `hello-world`.

Agora entre na pasta `hello-world` com o comando `cd hello-world`, e abra esta pasta no seu editor de texto.

Para rodar o projeto, execute `npm start` e então um servidor será criado mostrando o seu projeto no seu navegador. Qualquer mudança que você fizer em algum arquivo, o seu projeto será recarregado automaticamente no seu navegador.

Agora abra o arquivo `App.js` em `src/App.js` no seu editor e remova todo o conteúdo dele e substitua por esse aqui:

```js
import React from 'react';

const App = () => <h1>Olá, mundo!</h1>;

export default App;
```

Salve este arquivo e entre na página do seu projeto (localhost:3000). A página deverá mostrar uma mensagem de 'Hello, world!'.