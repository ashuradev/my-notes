# Iniciando com Laravel

## O que é Laravel

Laravel é um framework PHP utilizado para o desenvolvimento moderno de aplicações web criado pelo desenvolvedor Taylor Otwell. Ele utiliza as mais modernas funcionalidades de desenvolvimento PHP hoje em dia, como TDD, MVC, Composer, Autoload, PSRs, etc. O Laravel nos fornece uma estrutura pronta com Roteamento, Templates, ORM, proteções contra ataques de hackers, Middleware, Validação, etc, para você ir se preocupando mais com as regras de negócio de seu sistema ao invés de toda a estrutura do mesmo.

## Criando um projeto hello world (olá mundo)

Para criar o projeto hello world que utiliza Laravel, primeiro você precisa ter o Composer instalado no seu sistema. E então seguir estes passos:

1) Abra um terminal em algum diretório em que você guardará seu projeto.
2) Execute o comando `composer create-project --prefer-dist laravel/laravel o-nome-do-seu-projeto-aqui` no seu terminal. Este comando diz ao composer para criar um projeto utilizando a estrutura do Laravel, você também pode utilizar a CLI do Laravel, mas vou falar sobre a CLI do Laravel nos próximos posts.
3) Entre no diretório do seu projeto com o comando `cd`, por exemplo `cd hello-world`.
4) Inicie um servidor HTTP utilizando a ferramenta Artisan do Laravel com o comando `php artisan serve`. Ao executar este comando, o Artisan irá mostrar o endereço do seu projeto para você acessar, que por padrão é http://localhost:8000.
5) Acesse o arquivo resources/views/welcome.blade.php e então remova todo o conteúdo.
6) Adicione `<h1>Olá, mundo</h1>` no welcome.blade.php e então atualize a página inicial.
