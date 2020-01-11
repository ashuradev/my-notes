# Função extract() do PHP

```php
<?php

// extract($array)
// A função extract extrai todos os elementos de um $array 
// para o escopo atual.

$variaveis = [
    'mensagem' => 'siga ',
    'quem' => 'tecmastery'
];

extract($variaveis);

echo $mensagem . $quem; // --> siga tecmastery
```