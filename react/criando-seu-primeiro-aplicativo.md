# Criando seu primeiro aplicativo React (Olá Mundo)

Para um criar um aplicativo React, você pode usar o pacote `create-react-app` do npm para criar um projeto automaticamente com apenas uma linha de comando.

Abra um terminal e então execute esta linha de comando:
`npx create-react-app hello-world`

**Obs.**: Você precisa ter um NodeJS com o npm instalado para executar este comando (você baixar em https://nodejs.org/).

Executando este comando, o `npx` irá executar o `create-react-app`, e então o `create-react-app` irá criar um projeto na pasta `hello-world`.

Agora entre na pasta `hello-world` no seu terminal com `cd hello-world`, e abra esta pasta no seu editor de texto ou IDE (VsCode, Netbeans, etc).

Para rodar o projeto, execute `npm start` e então um servidor será criado mostrando o seu projeto no seu navegador.

Qualquer mudança que você fizer em algum arquivo, o seu projeto será recarregado automaticamente no seu navegador.

Agora abra o arquivo `App.js` em `src/App.js` e então remova todo o conteúdo dele e substitua por esse aqui:

```js
import React from 'react';

const App = () => <h1>Olá, mundo!</h1>;

export default App;
```

Então salve este arquivo e vai na página do seu projeto. A página deverá mostrar uma mensagem de 'Hello, world!'.