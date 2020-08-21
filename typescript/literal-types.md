# Literal types

É um *sub-tipo mais concreto* de um tipo coletivo (string, número, booleano) que diz exatamente qual o valor uma string, booleano ou número precisa ter.

```ts
// hello tem o tipo "eae"
const effectType = "eae";
```

O processo de ir de um número de casos infinitos (uma string pode ter infinitos valores) para um número pequeno e finito de casos é chamado de *narrowing*. Por exemplo, você trocar o tipo de uma variável string para uma string literal é chamado de *narrowing*.

Mais exemplos:

```ts
type Easing = 'ease-in' | 'ease-out';

let effect: Easing = 'ease-in';

// Com números

let x: 1 | 2 | 3 = 1;
```