# Precedência e associatividade

## Precedência

A precedência de operadores determina quais operadores são executado primeiros numa expressão. Por exemplo, o operador de multiplicação e divisão são executados primeiros numa expressão que tem os operadores de adição e subtração pois eles tem uma maior precedência.

## Associatividade

A associatividade de um operador diz respeito de qual lado começa o cálculo de uma expressão ou "sub-expressão" que contém operadores enfileirados:

```php
// --> Resulta em 3.5, pois a associatividade da divisão é da esquerda para direita, ou seja, o cálculo começará a partir do lado esquerdo.
70 / 10 / 2;

// --> Resulta em $x = 3 e $y = 3, pois a associatividade do operador de atribuição é da direita a esquerda, ou seja, o cálculo começerá a partir do lado direito.
$x = 1;
$y = 2;
$z = 3;
$x = $y = $z;
```

## Operadores com a mesma precedência e associatividade

Quando dois operadores tem a mesma precedência e associatividade, então a avaliação começará da esquerda para direita.
