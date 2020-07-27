# Função shuffle no PHP

```php
// shuffle(&$array)
// A função shuffle irá ordenar aleatoriamente um $array passado como parâmetro.

$meuArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

shuffle($meuArray);

/**
Agora $meuArray, foi ordenado aleatoriamente com o shuffle.

Exemplo do que pode retornar do shuffle:
[3, 1, 0, 7, 9, 6, 2, 5, 4, 8]   
*/
var_dump($meuArray);
```