# Variáveis

É um pedaço da memória que contém um valor.

## Tipos de dados

Cada variável há um tipo que diz qual é seu tamanho e como ela deverá ser utilizada pelo computador.

### Nulo

Nulo é um tipo de dado que diz que uma variável não possui valor.

### Boolean

É um tipo lógico que pode haver somente duas possibilidades de valores: `true` ou `false` que são utilizados para controlar o fluxo do código.

### Inteiro

É simplesmente qualquer número.

### Float

Também chamados de números ponto flutuantes ou doubles, são números decimais.

### Array

É uma estrutura com um conjunto de elementos identificados por chaves.

- Indexados: Array onde as chaves são números (índices).
- Associativos: Array onde chaves podem ser strings, floats, inteiros, booleanos e nulos.
- Multidimensionais: Array de arrays.

Por trás, todo array é um array associativo.

### String

É uma lista de caracteres que podem ser acessados como arrays:

```php
"test"[0]; // --> 't' (string)
```

## Variável variável

Uma variável variável utiliza o valor de uma outra variável como nome:

```php
$var = 'teste';
$$var = 'variavel2'; // uma variável variável

// Podemos acessar com:

$$var; // --> 'variavel2'
$teste; // --> 'variavel2'

```
