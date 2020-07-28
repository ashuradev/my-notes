# Switch

Um `switch` é utilizado para executar diferentes **ações** para diferentes **valores** de uma **expressão**.

Exemplo:

```php
$nome = 'Lucas';

switch ($nome) {
	case 'Lucas':
		echo "Seu nome é Lucas\n";
		break;

	case 'Diego':
		echo "Seu nome é Diego\n";
		break;

	default:
		echo "Não sei seu nome :(\n";
}
```

O `break` é utilizado para que caso um valor de um `case` seja o escolhido, não executar também o bloco do próximo `case` ou `default`, caso contrário o resultado deste código será:

```
Seu nome é Lucas
Seu nome é Diego
Não sei seu nome :(
```