# Eslint

É um linter para projetos JavaScript, ou seja, ele analisa estaticamente seu código, ou seja, sem executar, em busca de problemas, warnings, erros, etc.

Para configurar o ESLint, saiba que existe diferentes configurações:

- Ambientes: Os ambientes em que o projeto será executado. Cada ambiente tem um conjunto de variáveis globais definidas.
- Globais: As variáveis globais.
- Regras: As regras que estão habilitadas e em que nível de erro.

### Ambientes

Ao configurar o ambiente ES6, você ativa a sintaxe e as variáveis globais trazidas no ES6: ```json
{
	"env": {
		"es6": true
	}
}
```

Para ativar um ambiente de um plugin, utilize o seguinte formato: `nome-do-plugin/nome-do-ambiente`.

### Globals

```js
{
	"globals": {
		"Promise": "off"
	}
}
```

Flags: off, writable, readonly.

### Plugins

```js
{
	"plugins": []
}
```

### extends

Extende um conjunto de regras a partir de uma configurações base:

```json
{
	"extends": "airbnb-base"
}
```

Pode ser um array ou uma string, onde num array as últimas configurações extendem as primeiras.

### Parser options

Parser options são as opções da linguagem JavaScript que você irá suportar. Você pode utilizar as configurações de ambientes para configurar isto rapidamente.

## Plugins

Você pode especificar um plugin na chave plugins do seu ESLint, saiba que você pode omitir o prefixo `eslint-plugin-`. Cada plugin pode trazer consigo um conjunto de regras e processadores para utilizar.

Os plugins são carregados a partir do `node_modules` onde o arquivo de configuração está localizado. Também, os plugins carregados no *arquivo de configuração base* são carregados a partir do diretório onde *arquivo de configuração derivado* está localizado.

## Usando regras, ambientes e configurações a partir de plugins

Você deve carregar regras, ambientes e configurações a partir de acordo com o formato do nome do plugin:

- eslint-plugin-teste: teste/exemplo
- @teste/eslint-plugin-hello: @teste/hello/exemplo
- @teste/eslint-plugin: @teste/exemplo

Ou seja, sempre coloca uma barra depois do nome que você utilizou no array `plugins`.

## Processors

Processadores podem extrair código JS a partir de outros tipos de arquivos.

Você especifica um processador na seguinte sintaxe: `<plugin>/<processor>`.

## Configurando as regras a partir de comentários

```js
/* eslint curly: "error" */
// agora a regra curly tem severidade "error".

/* eslint quotes: ["warn", "double"], curly: "error" */
// agora a regra quotes tem a opção double e tem severidade warn. O primeiro elemento do array é sempre a severidade e o restante as opções.
```

## Regras

Para ativar uma regra de um plugin, utilize o seguinte formato: `nome-do-plugin/nome-da-regra`:

```json
{
	"rules": {
		"quotes": "off",
		"react/class-components": "error"
	}
}
```

Em comentários: 
```js
/* eslint "react/class-components": "off" */
```

## Desabilitando regras com comentários inline

```js
/* eslint-disable */
// tudo aqui é livre
/* eslint-enable */
// tudo aqui é proibido
```

Desativando regras específicas:

```js
/* eslint-disable no-console */

console.log('manipular o console agora pode po');

/* eslint-enable no-console */

// agora não pode
```

Desativando uma linha especifica:

```js
console.log('eae'); // eslint-disable-line

// eslint-disable-next-line
console.log('blz');

// ainda tem mais formatos....
```

Desativando uma regra numa linha:

```js
console.log('eae'); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log('eae');
```

Desativando várias regras:

```js
// eslint-disable-next-line no-console, quotes
console.log('aaa');

console.log('aaa'); // eslint-disable-line no-console, quotes
```

Desativando regras de um plugin, por exemplo, um plugin chamado eslint-plugin-plugin-name:

```js
// eslint-disable-next-line plugin-name/nome-da-regra
```

## Usando arquivos de configuração

Caso o parâmetro `-c` seja omitido, o ESLint irá procurar pelo .eslintrc.* e package.json no diretório para ser linted e em diretórios pais sucessivos até o diretório raiz do sistema.

## Configuração em cascata

O ESLint busca um arquivo .eslint.* no diretório onde o arquivo está passando por *lint* e vai buscando por mais arquivos .eslint.* nos diretórios pais até que uma flag `root: true` seja encontrada. O arquivo mais próximo tem maior prioridade nas configurações.

## Utilizando configurações a partir de plugins

Sintaxe: `plugin:[nome]/[nome-da-config]`, onde:

	- [nome]: O nome do pacote, lembre que o prefixo `eslint-plugin-` pode ser omitido.

```json
{
	"extends": {
		"plugin:react/recommended"
	}
}
```

## Utilizando um arquivo de configuração

```json
{
	"extends": [
		"../eslintrc.js"
	]
}
```
