# Funções

Uma função pode ser entendida como um bloco de código nomeado que é executado para executar uma determinada tarefa e retornar um determinado resultado a partir de valores dos parâmetros de entradas.

## Parâmetros

Eles basicamente recebem os valores que passamos, na definição de uma função, os parâmetros são colocados entre parênteses:

```php
// $x1 é um parâmetro
function teste($x1)
{

}
```

## Argumentos

Argumentos são o que enviamos para as funções.

## Métodos de enviar argumentos para as funções

### Passar por valor

Passar por valor, ou pass by value, significa simplesmente passar argumentos para funções por valores, sem que eles sejam alterados do lado de fora da função, ou seja, os valores são "copiados".

### Passar por referência

Passar por referência significa passar uma referência de uma variável como um parâmetro de uma função.

Para dizer que um parâmetro recebe uma referência é necessário que você coloque o símbolo `&` antes do nome do parâmetro:

```php
function sum(&$resultado, $x, $y) 
{
	$resultdo = $x + $y;
}

$resultado = null;

sum($resultado, 50, 20);

// $resultado = 70
```