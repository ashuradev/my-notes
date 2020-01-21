# Ciclo de vida de uma requisição HTTP no Laravel

Cada requisição que é passada para a sua aplicação Laravel tem um ciclo de vida, que pode ser compreendida nos seguintes passos:

1) Todas as requisições HTTP numa aplicação Laravel irão ser enviadas para o arquivo public/index.php. 
2) O index.php irá carregar o autoloader do Composer e então irá criar uma instância do seu app (o container de serviços). 
3) Um objeto que representa a requisição HTTP irá ser passada para o núcleo HTTP (HTTP kernel - localizado em app/Http/Kernel.php), onde o objetivo dele é receber uma requisição HTTP e retornar uma resposta apropriada. 
4) O kernel irá executar todos os bootstrappers (inicializadores) e services providers (provedores de serviços) do seu app.
5) Depois, o kernel irá executar todos os middlewares (os middlewares agem como um filtro da requisição).
6) Então o roteador (router) irá procurar a rota apropriada para a requisição. Se achar, o roteador irá executar o callback/controller da rota.
7) O router irá retornar uma resposta HTTP para o kernel, e o kernel irá retornar esta resposta para o index.php, e o index.php irá retornar a resposta para o navegador.

Iremos falar mais sobre cada conceito "estranho" deste post mais para frente.