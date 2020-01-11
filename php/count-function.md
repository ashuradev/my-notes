# Função count() do PHP

```php
<?php

// count($variavel, $modo = false)
// A função count retorna quantos items há em uma $variavel
// Se $modo for true, a função irá contar recursivamente os elementos
// da $variavel.
// Por padrão $modo é false.

echo count([5, 8]); // --> 2
echo count([ [3,6], [5, 8] ]); // --> 2
echo count([
    [3,6],
    [5,8]
], true); // --> 6
```