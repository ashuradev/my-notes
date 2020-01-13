# Funções array_keys e array_values no PHP

A função array_keys recebe um array e então retorna um array contendo as keys (chaves) deste array.

Exemplo:

```php
$array = [
    'tdd' => 'phpunit',
    'rotas' => 'routing',
    'laravel'
];
$chaves = array_keys($array); //['tdd', 'rotas', 0]

// irá mostrar o valor de $chaves, que é ['tdd', 'rotas', 0]
print_r($chaves);
```

A função array_values recebe um array e então retorna um array contendo todos os values (valores) deste array.

Exemplo:

```php
$array = [
    'tdd' => 'phpunit',
    'rotas' => 'routing',
    'laravel'
];
$valores = array_values($array); //['phpunit', 'routing', 'laravel']

// irá mostrar ['phpunit', 'routing', 'laravel']
print_r($valores); 
```