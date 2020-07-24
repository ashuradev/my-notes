# O que é MVC

MVC é um padrão de arquitetura de software, que separa sua aplicação em 3 camadas com responsabilidades distintas: Model-View-Controller.

Model: Esta camada é responsável pela manipulação e leitura de dados.

View: Esta camada é responsável pela exibição de dados.

Controller: Esta camada é responsável por receber as requisições (dados) do usuário e então fazer alguma coisa com eles, como por exemplo mostrar uma view, persistir os dados (gravar em algum lugar) e etc.   
Nos controllers há as chamadas actions (ações), que é responsável por somente fazer alguma coisa com a requisição (exemplo: uma action para mostrar uma view que exibe um formulário de registro, uma action para registrar o usuário no banco de dados).