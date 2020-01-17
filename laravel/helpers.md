# Helpers no Laravel

Helpers (em português fica ajudantes) no Laravel são funções utilitárias que te ajudam no desenvolvimento de aplicações.

Alguns helpers:

```php
// view($caminho)
// Nos retorna uma view que fica em $caminho
view('welcome');

// env($nome, $default)
// Nos retorna uma variável ambiente com determinado $nome,
// se ela não existir, então $default será retornado.
env('APP_NAME', 'Laravel');

// url($caminho)
// Nos retorna uma URL completa de um $caminho que fica na sua aplicação.
url('/home'); // Por exemplo, irá retornar http://seusite.com/home

// Str::random($tamanho)
// Retorna uma string aleatória com um $tamanho.
Str::random(6); // Por exemplo, irá retornar BA5CDE
```