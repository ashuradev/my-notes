# Básico sobre roteamento de URIs no Laravel

O roteamento no Laravel nos permitem mapear URIs para executar algumas funções, e estas funções por sua vez realizam algum processamento ou mostram alguns dados para o cliente HTTP que estiver enviando uma requsição (por exemplo, um navegador).
Você define rotas (mapeamentos) no arquivo `routes/web.php` do seu projeto Laravel (quando não está construindo uma API).
Para definir uma rota neste arquivo, você pode chamar alguns métodos da classe `Route`.
Quando o Laravel recebe uma requisição HTTP ele irá buscar todas as rotas registradas e então irá verificar se cada rota bate com o método e uri da requisição, se uma rota bater com os dados da requisição o Laravel irá chamar a função callback desta rota, e esta função por sua vez irá retornar uma resposta para o usuário.
```php
// Alguns métodos são:
// - Route::get($uri, $callback): Cria uma rota com GET.
// - Route::post($uri, $callback): Cria uma rota com POST.
// - Route::put($uri, $callback): Cria uma rota com PUT.
// - Route::delete($uri, $callback): Cria uma rota com DELETE.

Route::get('/contato', function () {
    // Se o usuário entrar em /contato, esta resposta será enviada.
    return 'meu contato é tecmastery.dev@gmail.com';
});
// Se o navegador do usuário enviar uma requisição POST para /contato 
// a função desta rota será ativada, e então retornará alguma resposta.
Route::post('/contato', function () {
    return 'Você enviou uma requisição POST para a URI /contato, e esta mensagem é a sua resposta.';
});

```