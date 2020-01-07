# API de senhas do PHP 

O PHP tem uma API para o tratamento de senhas desde do PHP 5.5.0. Esta API nos fornece algumas funções para a criação e gerenciamento de senhas de forma segura.

```php 
<?php
// Algumas funções desta API:

// password_hash($senha, $algoritmo)
// Esta função retorna uma hash de uma $senha usando um $algoritmo.
// O $algoritmo pode ser:
//  - PASSWORD_DEFAULT: Usa o algoritmo padrão do PHP 
//    para criar uma hash de uma senha. O algoritmo padrão desde 
//    o PHP 5.5.0 é o bcrypt.
//  - PASSWORD_BCRYPT: Usa o algoritmo bcrypt para criar uma hash.
//  - PASSWORD_ARGON2I: Usa o algoritmo Argon2 para criar uma hash.
$hashDaMinhaSenha = password_hash('root', PASSWORD_DEFAULT);

// Função password_verify($senha, $hash)
// Verifica se uma $senha corresponde com uma $hash.
if (password_verify('root', $hashDaMinhaSenha)) {
    echo 'Esta senha é a correta!';
    echo 'Você está logado!';
} else {
    echo 'Esta senha é incorreta!';
    echo 'Você não está logado!';
}

```