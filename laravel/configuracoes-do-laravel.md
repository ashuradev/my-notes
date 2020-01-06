# Configurações do Laravel

As configurações da sua aplicação Laravel em sua maioria estão na pasta `config`, separadas por arquivos.

## Arquivo .env

O arquivo `.env` armazena diferentes configurações dependendendo do ambiente atual que sua aplicação está rodando (ambiente de desenvolvimento, produção, etc). Por exemplo, você pode ter um arquivo `.env` que armazena configurações do seu app na sua hospedagem (por exemplo, com diferentes configurações do seu banco de dados), e um outro arquivo `.env` que armazena configurações do seu app na sua máquina.

Exemplo de um pedaço do arquivo .env:

```
APP_NAME=Laravel
APP_URL=http://localhost
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

O valor que está antes do sinal de igual é o identificador de uma configuração, e o valor que está depois do sinal de igual é o valor da configuração. Neste exemplo, o `APP_NAME` é o nome do seu aplicativo, cujo valor é Laravel.