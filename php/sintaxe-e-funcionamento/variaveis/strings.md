# Strings

São simplesmente textos.

## Interpolação

Interpolar significa inserir uma variável numa string, só funciona com aspa duplas:

```php
$name = 'Barry Allen';

echo "Hello, my names is $name.";
```

## Curly syntax

A sintaxe curly é utilizada para interpolar variáveis numa string de modo que previne que o nome da variável seja incorporado com alguma parte do texto:

```php
$name = 'uva';

echo "Compra várias $namess"; // --> Erro: $namess não existe
echo "Compra várias {$name}s"; // --> Compra várias uvas
```