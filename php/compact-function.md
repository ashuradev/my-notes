# Função compact() do PHP

```php
<?php

// compact(...$variavel)
// A função compact cria um array contendo todas as variáveis
// passadas como parâmetros para a função. É o oposto da função
// extract()

$mensagem = 'siga ';
$quem = 'tecmastery';
$variaveis = compact('mensagem', 'quem');

/**
 * array(2) {
 *   ["mensagem"]=>
 *   string(5) "siga "
 *   ["quem"]=>
 *   string(10) "tecmastery"
 * }
 */
var_dump($variaveis);
```