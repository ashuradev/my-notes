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

## Funções

### substr

O `substr` extrai e retorna um pedaço de uma string de tamanho y a partir de uma posição x.

**Lembre-se: As strings assim como os arrays começam no índice 0.**

```php
// substr($str, $x, $y);

// H e l l o ,   w o r l  d  !
// 0 1 2 3 4 5 6 7 8 9 10 11 12
echo substr('Hello, world!', 6, 5); // --> world
```

### strpos

Retorna a posição de uma string em outra string:

```php
// strpos($alvo, $procurar)

echo strpos('Hello', 'He'); // --> 0
echo strpos('Hello', 'lo'); // --> 3
```

### substr_replace

Substitui uma string a partir de um início:

```php
echo substr_replace('Hello Worldzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 'Ashura', 6);
```