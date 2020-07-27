# Função array_unique no PHP

A função array_unique recebe um array e então retorna o mesmo array sem valores duplicados.

```php
<?php

/* 
este print_r irá imprimir isso:
Array
(
    [0] => symfony
    [1] => laravel
    [2] => slim
)
*/
print_r(
    array_unique(
        [
            'symfony',
            'laravel',
            'slim',
            'spark' => 'slim',
            'slim'
        ]
    )
);
```