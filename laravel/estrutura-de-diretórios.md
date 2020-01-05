# Estrutura do Laravel

Neste post, iremos falar alguns diretórios e arquivos que o Laravel gerou.

app/ - Aqui fica a maioria do código fonte do seu aplicativo.
    - Http/ - Aqui fica tudo relacionado ao HTTP (O seu kernel HTTP, Controllers, Middleware, Form Requests)
    
    - Providers/ - Aqui fica os seus service providers
    
    - Exceptions/ - Aqui fica o seu manipulador de exceptions e as exceptions próprias do seu aplicativo.

    - Console/ - Aqui fica todos os comandos do Artisan

bootstrap/ - Aqui fica os arquivos que iniciam o framework

config/ - Aqui fica as configurações do seu aplicativo

database/ - Aqui fica as suas migrations, seeds e factories do seu banco de dados

public/ - Aqui fica todos os arquivos públicos da sua aplicação, como o index.php que é o ponto de entrada para todas as requisições HTTP e seus assets (css, js, imagens, etc)

resources/ - Aqui fica todas as suas views, idiomas (lang) da sua aplicação e os assets que vão ser compilados (scss, js moderno, etc)

tests/ - Aqui fica os testes do seu aplicativo (TDD)

vendor/ - Aqui fica as dependências da sua aplicação (gerado pelo Composer)

.env - Aqui fica as configurações do ambiente atual que o Laravel está rodando (env file).