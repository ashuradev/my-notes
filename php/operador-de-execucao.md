# Operador de execução no PHP

O operador de execução (representado por acentos graves) faz com que o PHP execute o comando de shell que está entre acentos graves e então retornar a sua saída.

```php
<?php

// O comando ls é um comando de shell que lista todos os diretórios e arquivos
// que estão dentro do diretório atual do script.
$saida = `ls`;

// Mostrará algo como
//  meuscript.php  umdiretorio/  outrodiretorio/ outroarquivo.php
echo $saida;
```