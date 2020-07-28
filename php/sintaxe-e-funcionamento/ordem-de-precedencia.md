# Ordem de precedência no PHP

A ordem de precedência determina a ordem que operadores serão executados. Por exemplo, na expressão `1 + 2 * 3`, o operador `*` será executado primeiro, pois o operador `*` tem precedência maior que o operador `+`.

A seguinte tabela mostra a ordem de precedência de alguns operadores no PHP (do maior até o menor):

|Operador      |
---------------|
|!             |
|* / %         |
|+ - .         |
|== === != !== |
|\|            |
|&&            |
|\|\|          |

Como podemos ver nesta tabela, o operador de `*`, `/` e `%` serão executados primeiro que os operadores `+`, `-` e `.`.

Para forçar a execução de uma operação, você pode utilizar os parentêses.

Exemplos:

```php
echo 1 + 2 * 3; // O resultado será 7 e não 9  
echo (1 + 2) * 3; // O resultado será 9 e não 7  
```
