# Escopo de variáveis

O escopo de uma variável é o contexto onde a variável está, ou seja, a sua visibilidade nas partes de um programa.

## Tipo de variáveis

### Variáveis locais

São variáveis definidas no escopo local de uma função e que se pode ser acessados neste escopo.

### Variáveis globais

São variáveis definidas fora de uma função e que pode acessado em qualquer parte de um programa.

Para acessar e modificar uma variável global numa função, basta utilizar a palavra-chave `global`:

```php
$username = 'test';

function set_username($newUsername)
{
	global $username;

	$username = $newUsername;
}

set_username('Lisa');

echo $username; // --> 'Lisa'
```