# Views no Laravel

Views (visualizações) no Laravel são arquivos que renderizam dados no Laravel. As views no Laravel utilizam o sistema de templates Blade, feito pelo Laravel.
Para criar uma view, você deve criar um arquivo utilizando o formato de nome `nomedasuaview.blade.php` em `resources/views`. Neste arquivo, você deverá mostrar alguns dados utilizando o HTML + Blade.

<!-- conteúdo do arquivo em resources/views/home.blade.php -->

<html>
    <head>
        <meta charset="utf8">
        <title>Titulo</title>
    </head>
    <body>
        <h1>Página inicial</h1>
    </body>
</html>

Para renderizar alguma view em alguma rota, você pode chamar a função helper `view` e então retornar os dados retornados por esta função.

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        return view('home'); // passa somente o nome da sua view, sem a extensão e o diretório `resources/views`
    }
}