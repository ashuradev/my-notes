# Objeto arguments em funções JS

O objeto arguments é um objeto que está disponível em todas as funções, este objeto guarda todos os argumentos passados quando você chama uma função. Você pode acessar este objeto como se acessasse um array.

```js
function teste()
{
    // Arguments(4) ["laravel", "codeigniter", "slim", "symfony", ...]
    console.log(arguments);

    console.log(arguments[0]); // --> laravel
    console.log(arguments[1]); // --> codeigniter
    console.log(arguments[2]); // --> slim
    console.log(arguments[3]); // --> symfony
}

teste('laravel', 'codeigniter', 'slim', 'symfony');
```